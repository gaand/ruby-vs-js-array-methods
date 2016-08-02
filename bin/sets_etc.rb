developers = %w(Nick Natalie Ross Susan Phil)
consultants = %w(Jason Ross Lauren)
p developers
p consultants

subtract1 = developers - consultants
subtract2 = consultants - developers

p subtract1
p subtract2

union = developers | consultants

p union

intersection = developers & consultants

p intersection
