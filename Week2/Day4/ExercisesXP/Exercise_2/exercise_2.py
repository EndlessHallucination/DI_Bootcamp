import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]

print("Salary:", salary)

data["company"]["employee"]["birth_date"] = "1995-05-15"

with open("modified_data.json", "w") as file:
    json.dump(data, file, indent=4)

print("Modified JSON saved successfully.")