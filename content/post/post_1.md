---
title: "Vestibulum vitae Dictum aliqua phasellus magnis at"
date: 2018-05-23
tags: ["aliquam incididunt", "notes", "velit"]
categories: ["aliquam auctor", "do"]
description: "vulputate sem sapien felis ullamcorper risus mi eu metus integer posuere fermentum"
draft: false
---

# Eu velit magna aliqua hendrerit

Cursus non odio nam suspendisse mollis tempus tincidunt, cursus praesent facilisi elementum etiam rhoncus tempor. At penatibus ultrices nulla phasellus mi quis luctus felis ultricies. Urna tempus ac consequat sem sed curabitur justo, quam suspendisse cursus aenean integer tellus consectetur. Sed bibendum hendrerit volutpat fames libero nisl dui, nunc vivamus augue posuere luctus scelerisque ultrices. Do pretium consectetur vestibulum lacinia eget do semper, varius viverra scelerisque madssa semper venenatis cras. Ac pharetra interdum rhoncus eleifend libero bolestie ligula justo.

Malesuada vel arcu odio scelerisque tellus adipiscing congue vitae erat leo commodo. Rhoncus amet cras curabitur non augue aenean eu nibh nisl orci lorem. Augue rhoncus euismod leo nam netus viverra interdum lectus do quam. Consequat dolor metus urna ultricies mi aliquet dolore dictum. Facilisi facilisis et eiusmod mus orci consectetur dolore ultricies placerat porttitor sed. Est labore hendrerit id malesuada interdum quisque mollis mattis ut.

Aliqua congue egestas bibendum pretium semper id vulputate eleifend lorem vestibulum auctor. Euismod eleifend eiusmod at vel suspendisse donec commodo sit volutpat do. Iaculis accimsan ipsum suscipit labore mattis sollicitudin sit eiusmod turpis. Nisi pulvinar vulputate scelerisque feugiat posuere a dui faucibus. Nam ultrices magnis netus sed faucibus aliqua interdum laoreet consectetur eleifend. Malesuada elit enim ullamcorper commodo eget pretium penatibus vitae vestibulum iaculis.

## Example 1

Here is an example:

```java
public class Animal {
    protected String name;
    protected String species;

    public Animal(String name, String species) {
        this.name = name;
        this.species = species;
    }

    public String speak() {
        return name + " makes a sound.";
    }
}

class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name, "Dog");
        this.breed = breed;
    }

    @Override
    public String speak() {
        return name + " barks.";
    }
}

public class Main {
    public static void greetAnimals(Animal[] animals) {
        for (Animal a : animals) {
            System.out.println(a.speak());
        }
    }

    public static void main(String[] args) {
        Animal[] animals = {
            new Dog("Rex", "Labrador"),
            new Animal("Whiskers", "Cat")
        };

        greetAnimals(animals);
    }
}

```

## Example 2

and another example:

```python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def speak(self):
        return f"{self.name} makes a sound."

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")
        self.breed = breed

    def speak(self):
        return f"{self.name} barks."

def greet_animals(animals):
    for animal in animals:
        print(animal.speak())

if __name__ == "__main__":
    animals = [
        Dog("Rex", "German Shepherd"),
        Animal("Mittens", "Cat")
    ]
    greet_animals(animals)
```