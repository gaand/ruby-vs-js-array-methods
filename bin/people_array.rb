require_relative '../lib/people.rb'

people = People.new.people
people_older_than_henry = people.count { |p| p.age > 54 }
people_first_last = people.count { |p| p.surname[0] == p.given_name[0] }
average_age = people.reduce(0) { |a, e| a + e.age } / people.length.to_f

puts "People older than Henry: #{people_older_than_henry}"
puts "People first/last: #{people_first_last}"
puts "Average age: #{average_age}"
