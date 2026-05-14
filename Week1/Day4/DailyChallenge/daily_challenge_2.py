MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%''' 


matrix = []

rows = MATRIX_STR.split("\n")

for row in rows:
    if row.strip():                
        matrix.append(list(row)) 



decoded_message = ""

for col in range(len(matrix[0])):

    column_text = ""

    for row in matrix:
        column_text += row[col]

  
    for char in column_text:
        if char.isalpha():
            decoded_message += char
        else:
            decoded_message += " "

final_message = " ".join(decoded_message.split())

print(final_message)