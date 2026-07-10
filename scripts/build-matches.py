import json
import re
from datetime import date as today
from pathlib import Path

from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
HTML = Path("/private/tmp/worldcup2026.html")


TEAM_ALIASES = {
    "Bosnia and Herzegovina": "bosnia",
    "Cape Verde": "cape-verde",
    "Curaçao": "curacao",
    "Czech Republic": "czech-republic",
    "DR Congo": "dr-congo",
    "England": "england",
    "Haiti": "haiti",
    "Ivory Coast": "ivory-coast",
    "New Zealand": "new-zealand",
    "Saudi Arabia": "saudi-arabia",
    "South Africa": "south-africa",
    "South Korea": "south-korea",
    "United States": "united-states",
}

MANUAL_MATCH_UPDATES = {
    79: {
        "score": "2–0",
        "homeGoals": ["Quiñones 22'", "Jiménez 31'"],
        "awayGoals": [],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    80: {
        "score": "2–1",
        "homeGoals": ["Kane 75'", "Kane 86'"],
        "awayGoals": ["Cipenga 7'"],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    81: {
        "score": "3–2",
        "homeGoals": ["Lukaku 86'", "Tielemans 89'", "Tielemans 120+5' (pen.)"],
        "awayGoals": ["Diarra 24'", "I. Sarr 51'"],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    82: {
        "score": "2–0",
        "homeGoals": ["Balogun 44'", "Tillman 82'"],
        "awayGoals": [],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    83: {
        "score": "2–1",
        "homeGoals": ["Ronaldo 68' (pen.)", "Gonçalo Ramos 90+4'"],
        "awayGoals": ["Perišić 53'"],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    84: {
        "score": "3–0",
        "homeGoals": ["Oyarzabal 36'", "Pedro Porro 66'", "Oyarzabal 89'"],
        "awayGoals": [],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    85: {
        "score": "2–0",
        "homeGoals": ["Embolo 10'", "Ndoye 46'"],
        "awayGoals": [],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    86: {
        "score": "3–2",
        "homeGoals": ["Messi 29'", "Li. Martínez 92'", "Diney 111' (o.g.)"],
        "awayGoals": ["D. Duarte 59'", "S.L. Cabral 103'"],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    87: {
        "score": "1–0",
        "homeGoals": ["J. Arias 14'"],
        "awayGoals": [],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    88: {
        "score": "1–1",
        "homeGoals": ["Hany 55' (o.g.)"],
        "awayGoals": ["Ashour 13'"],
        "penalties": "2–4",
        "status": "completed",
        "homeResult": "负",
        "awayResult": "胜",
    },
    89: {
        "score": "0–1",
        "homeGoals": [],
        "awayGoals": ["Mbappé 70' (pen.)"],
        "penalties": "",
        "status": "completed",
        "homeResult": "负",
        "awayResult": "胜",
    },
    90: {
        "score": "0–3",
        "homeGoals": [],
        "awayGoals": ["Ounahi 50'", "Ounahi 82'", "Rahimi 90+8'"],
        "penalties": "",
        "status": "completed",
        "homeResult": "负",
        "awayResult": "胜",
    },
    91: {
        "score": "1–2",
        "homeGoals": ["Neymar 90+10' (pen.)"],
        "awayGoals": ["Haaland 79'", "Haaland 89'"],
        "penalties": "",
        "status": "completed",
        "homeResult": "负",
        "awayResult": "胜",
    },
    92: {
        "score": "2–3",
        "homeGoals": ["Quiñones 42'", "Jiménez 69'"],
        "awayGoals": ["Bellingham 36'", "Bellingham 38'", "Kane 60' (pen.)"],
        "penalties": "",
        "status": "completed",
        "homeResult": "负",
        "awayResult": "胜",
    },
    93: {
        "score": "0–1",
        "homeGoals": [],
        "awayGoals": ["Merino 91'"],
        "penalties": "",
        "status": "completed",
        "homeResult": "负",
        "awayResult": "胜",
    },
    94: {
        "score": "4–1",
        "homeGoals": ["De Ketelaere 9'", "De Ketelaere 33'", "Vanaken 57'", "Lukaku 90+3'"],
        "awayGoals": ["Tillman 31'"],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    95: {
        "score": "3–2",
        "homeGoals": ["Romero 79'", "Messi 83'", "Fernandez 90+2'"],
        "awayGoals": ["Ibrahim 10'", "Zico 58'"],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    96: {
        "score": "0–0",
        "homeGoals": [],
        "awayGoals": [],
        "penalties": "4–3",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
    97: {
        "score": "2–0",
        "homeGoals": ["Mbappé 60'", "Dembélé 66'"],
        "awayGoals": [],
        "penalties": "",
        "status": "completed",
        "homeResult": "胜",
        "awayResult": "负",
    },
}

MANUAL_TEAM_REPLACEMENTS = {
    92: {
        "home": "Mexico",
        "homeId": "mexico",
        "away": "England",
        "awayId": "england",
    },
    94: {
        "home": "Belgium",
        "homeId": "belgium",
        "away": "United States",
        "awayId": "united-states",
    },
    93: {
        "home": "Portugal",
        "homeId": "portugal",
        "away": "Spain",
        "awayId": "spain",
    },
    95: {
        "home": "Argentina",
        "homeId": "argentina",
        "away": "Egypt",
        "awayId": "egypt",
    },
    96: {
        "home": "Switzerland",
        "homeId": "switzerland",
        "away": "Colombia",
        "awayId": "colombia",
    },
    97: {
        "home": "France",
        "homeId": "france",
        "away": "Morocco",
        "awayId": "morocco",
    },
    98: {
        "home": "Spain",
        "homeId": "spain",
        "away": "Belgium",
        "awayId": "belgium",
    },
    99: {
        "home": "Norway",
        "homeId": "norway",
        "away": "England",
        "awayId": "england",
    },
    100: {
        "home": "Argentina",
        "homeId": "argentina",
        "away": "Switzerland",
        "awayId": "switzerland",
    },
    101: {
        "home": "France",
        "homeId": "france",
        "away": "Winner Match 98",
        "awayId": "winner-match-98",
    },
}

MANUAL_MATCH_NUMBERS = {
    ("Portugal", "Croatia"): 83,
    ("Spain", "Austria"): 84,
    ("Australia", "Egypt"): 88,
    ("Argentina", "Cape Verde"): 86,
}


def slugify(name):
    if name in TEAM_ALIASES:
        return TEAM_ALIASES[name]
    return (
        name.lower()
        .replace("&", "and")
        .replace(" ", "-")
        .replace(".", "")
        .replace("'", "")
    )


def clean(text):
    return re.sub(r"\s+", " ", text.replace("\xa0", " ")).strip()


def replay_url(home, away, date):
    query = f"{home} vs {away} {date[:4]} FIFA World Cup highlights full match replay"
    return "https://www.youtube.com/results?search_query=" + query.replace(" ", "+")


def score_parts(score):
    match = re.search(r"(\d+)\s*–\s*(\d+)", score)
    if not match:
        return None
    return int(match.group(1)), int(match.group(2))


def display_score(score):
    parts = score_parts(score)
    if not parts:
        return ""
    return f"{parts[0]}–{parts[1]}"


def penalty_parts(box):
    text = clean(box.get_text(" ", strip=True))
    match = re.search(r"Penalties.*?(\d+)\s*–\s*(\d+)", text)
    if not match:
        return None
    return int(match.group(1)), int(match.group(2))


def goal_items(table, selector):
    cell = table.select_one(selector)
    if not cell:
        return []
    goals = []
    for item in cell.select("li"):
        text = clean(item.get_text(" ", strip=True))
        if text:
            goals.append(text.replace(" ,", ",").replace("( ", "(").replace(" )", ")"))
    return goals


def get_stage(box):
    heading = box.find_previous(["h2", "h3"])
    while heading:
        text = clean(heading.get_text(" ", strip=True))
        if re.match(r"Group [A-L]$", text):
            group = text[-1]
            return "group", "小组赛", group
        if text in ["Round of 32", "Round of 16", "Quarterfinals", "Semifinals", "Match for third place", "Final"]:
            labels = {
                "Round of 32": "32强淘汰赛",
                "Round of 16": "16强淘汰赛",
                "Quarterfinals": "四分之一决赛",
                "Semifinals": "半决赛",
                "Match for third place": "三四名决赛",
                "Final": "决赛",
            }
            return "knockout", labels[text], None
        heading = heading.find_previous(["h2", "h3"])
    return "unknown", "比赛", None


def outcome_for(team, home, away, score, penalties, status, stage_type):
    if status != "completed":
        return "待赛"
    parts = score_parts(score)
    if not parts:
        return "待赛"
    home_score, away_score = parts
    home_wins = home_score > away_score
    away_wins = away_score > home_score
    if home_score == away_score and penalties:
        home_wins = penalties[0] > penalties[1]
        away_wins = penalties[1] > penalties[0]
    if home_score == away_score and not penalties:
        return "平"
    if team == home:
        return "胜" if home_wins else "负"
    if team == away:
        return "胜" if away_wins else "负"
    return ""


def main():
    soup = BeautifulSoup(HTML.read_text(encoding="utf8"), "html.parser")
    matches = []

    for index, box in enumerate(soup.select("div.footballbox"), start=1):
        table = box.select_one("table.fevent")
        if not table:
            continue
        home_el = table.select_one(".fhome")
        away_el = table.select_one(".faway")
        score_el = table.select_one(".fscore")
        if not (home_el and away_el and score_el):
            continue

        home = clean(home_el.get_text(" ", strip=True))
        away = clean(away_el.get_text(" ", strip=True))
        score = clean(score_el.get_text(" ", strip=True))
        date = clean(box.select_one(".fdate").get_text(" ", strip=True)) if box.select_one(".fdate") else ""
        iso_el = box.select_one(".bday")
        iso_date = clean(iso_el.get_text(" ", strip=True)) if iso_el else ""
        time = clean(box.select_one(".ftime").get_text(" ", strip=True)) if box.select_one(".ftime") else ""
        venue_el = box.select_one(".fright [itemprop='name address']")
        venue = clean(venue_el.get_text(" ", strip=True)) if venue_el else ""
        stage_type, stage, group = get_stage(box)
        penalties = penalty_parts(box)
        completed = bool(score_parts(score))
        match_no = re.search(r"Match\s+(\d+)", score)

        match = {
            "id": f"m{index}",
            "matchNo": int(match_no.group(1)) if match_no else index,
            "stageType": stage_type,
            "stage": stage,
            "group": group,
            "date": iso_date or date,
            "time": time,
            "venue": venue,
            "home": home,
            "homeId": slugify(home),
            "away": away,
            "awayId": slugify(away),
            "score": display_score(score) if completed else "",
            "homeGoals": goal_items(table, ".fhgoal") if completed else [],
            "awayGoals": goal_items(table, ".fagoal") if completed else [],
            "penalties": f"{penalties[0]}–{penalties[1]}" if penalties else "",
            "status": "completed" if completed else "scheduled",
            "replayUrl": replay_url(home, away, iso_date or date),
        }
        if (home, away) in MANUAL_MATCH_NUMBERS:
            match["matchNo"] = MANUAL_MATCH_NUMBERS[(home, away)]
        match["homeResult"] = outcome_for(home, home, away, score, penalties, match["status"], stage_type)
        match["awayResult"] = outcome_for(away, home, away, score, penalties, match["status"], stage_type)
        matches.append(match)

    for match in matches:
        if match["matchNo"] in MANUAL_MATCH_UPDATES:
            match.update(MANUAL_MATCH_UPDATES[match["matchNo"]])
        if match["matchNo"] in MANUAL_TEAM_REPLACEMENTS:
            match.update(MANUAL_TEAM_REPLACEMENTS[match["matchNo"]])
            match["replayUrl"] = replay_url(match["home"], match["away"], match["date"])

    grouped = {}
    for match in matches:
        for side in ["home", "away"]:
            team_id = match[f"{side}Id"]
            grouped.setdefault(team_id, []).append(match)

    output = {
        "source": f"Wikipedia 2026 FIFA World Cup page, fetched {today.today().isoformat()}; latest knockout results patched from match reports",
        "sourceUrl": "https://en.wikipedia.org/wiki/2026_FIFA_World_Cup",
        "matches": matches,
        "byCountry": grouped,
    }

    (ROOT / "data" / "matches.js").write_text(
        "window.WORLD_CUP_MATCHES = " + json.dumps(output, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf8",
    )
    print(f"matches={len(matches)} countries={len(grouped)} completed={sum(m['status']=='completed' for m in matches)}")


if __name__ == "__main__":
    main()
