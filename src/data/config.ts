export const leaders = JSON.parse(process.env.NEXT_PUBLIC_LEADERS || `[
  { "name": "Catherine Duclos", "role": "Scoutmaster", "phone": "617-594-8207", "email": "ctduclos@cox.net" },
  { "name": "Brian McMahon", "role": "Scoutmaster", "phone": "401-935-6239", "email": "SM711albion@gmail.com" },
  { "name": "Michael Webber", "role": "Committee Chairman", "phone": "774-306-1326", "email": "mwebber1@gmail.com" },
  { "name": "Charlie Malenfant", "role": "Chartered Org. Rep", "phone": "401-477-6587", "email": "chaz920@verizon.net" }
]`);

export const faqs = JSON.parse(process.env.NEXT_PUBLIC_FAQS || `[
  {
    "question": "When and where are the Troop meetings?",
    "answer": "The Troop meetings are held every Thursday from 7 to 8 at St. Ambrose Church in Lincoln, RI."
  }
]`);

export const eagles = JSON.parse(process.env.NEXT_PUBLIC_EAGLES || `[
  { "name": "John Smith", "year": 2023 },
  { "name": "Lucas Webber", "year": 2022 },
  { "name": "Jane Doe", "year": 2021 }
]`);