---
theme: ./theme
title: Intro to Java
layout: title
author: Gavin N. P.
---

# Intro to Java
::subtitle::
3926 Code Team 26-27
---
layout: section
---
# Java
---
layout: two-cols
---

# Values and decisions

::left::

### History of Coding

- Ada Lovelace
  - Widely considered the first “programmer”
  - Designed a algorithm to compute numbers

### History of Java
- Developed in early 1990s
- James Gosling working for Sun Microsystems

::right::

## Why do we use Java

- WPIlib supports three languages
  - Java
  - C++
  - Python
- ~75% of all FRC teams use Java
- AP Computer Science A
---
layout: two-cols
brand: false
---

# How does Java actually work
<br>
Basic Structure:

**Source Code** ---> *Compiler(javac)* ---> **bytecode** ---> *JVM* ---> **Computer**

::left::
<br>
<br>
<br>
<br>

### Source Code
  - The code you write in Java
  - `.java` file

### Compiler
- Turns the source code into bytecode

::right::
<br>
<br>
<br>
<br>

### Byte Code
  - Instructions for the JVM
  - Stored in `.class` files (for Java)

### JVM
- Java Virtual Machine
- Takes the bytecode and
  
  turns it into OS specific code

---
layout: section
---

# Hello World
---

# Hello World

```java {*|2}
public static void main(String[] args) {
  System.out.println("Hello World");
}
```
<br>
One of the most basic things you can do in programming: print to the terminal.

![Hello World](./res/Hello%20World.png)

<style>
.standard-flow img { width: 680px; height: 140px; object-fit: cover; object-position: top; }
</style>
---

# Variables

A variable is a piece of information stored in our code.
In Java variables are created like this:
```java
String firstname = "Gavin";
int age = 16;
```
<br>

- String is a type of variable that stores characters.
- int is a type of variable that stores integers.
---

# Primitive Variable Types
| Type        | Description (bolded types are what we mostly use)                            |
| ----------- | -------------------------------------------- |
| byte        | Small integers (-128 to 127)                 |
| short       | Bigger integers (-32,768 to 32,767)          |
| **int**     | **Big integers (most common)**               |
| long        | Biggest integers                             |
| float       | Decimals with ~6–7 digits of precision       |
| **double**  | **Decimals with ~15–16 digits of precision** |
| char        | Single characters                            |
| **boolean** | **true or false**                            |

<style>
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.2rem
}

th,
td {
  border: 1px solid currentColor;
  padding: 0.4rem 0.75rem;
}
</style>

---

# Reference Variable Types

<table>
  <tr>
    <th>Type</th>
    <th>Description (bolded types are what we mostly use)</th>
  </tr>

  <tr>
    <td><strong>String</strong></td>
    <td><strong>Characters</strong></td>
  </tr>

  <tr>
    <td>Array</td>
    <td>Multiple values of the same variable type</td>
  </tr>

  <tr>
    <td><strong>Class/Object</strong></td>
    <td rowspan="5" class="coming-soon">
      <strong>We will get to these as they come up</strong>
    </td>
  </tr>

  <tr>
    <td>Interface</td>
  </tr>

  <tr>
    <td>Enum</td>
  </tr>

  <tr>
    <td>Record</td>
  </tr>

  <tr>
    <td>Annotation</td>
  </tr>
</table>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.2rem;
  margin-top: 1rem;
}

th,
td {
  border: 1px solid currentColor;
  padding: 0.45rem 0.75rem;
}

th {
  font-weight: 700;
  text-align: left;
}

.coming-soon {
  text-align: center;
  vertical-align: middle;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>

---

# Syntax and Comments
````md magic-move {lines: true}
```java
//this is a comment in java

/*
there are also
multi-line comments
*/
```
```java
/* Java statements end in a semicolon.
Braces group code into blocks. */

System.out.println("Hello World");

String firstname = "Gavin";
  
int age = 16;

```
```java
public static void main(String[] args) {
  int age = 16;
  String firstname = "Gavin"; // double quotes for strings
  char initial = 'P'; // single quotes for chars
  System.out.println("Name: " + firstname);
  System.out.println("Last Initial: " + initial);
  System.out.println("Age: " + age);
}
```
```
Name: Gavin
Last Initial: P
Age: 16
```
````
---
layout: section
---

# Operators, If, Loops
---
class: text-[1px]
---

# Operators
<div class="text-base">

An operator is a symbol or word that performes an operation on a variable. In Java there are eight types of operators.

- Assignment Operators
- Arithmetic Operators
- Unary Operators
- Logical Operators
- Relational/Comparison Operators
- Equality Operators
- Bitwise Operators
- Ternary Operator
</div>
---
layout: two-cols
class: compact
brand: false
---

# Assignment and Equality

::left::

<div class="text-base">

## Assignment Operators

**`=` stores a value.** "Compound operators" also update the variable.

| Operators | Action |
| --- | --- |
| `=` | Assign |
| `+=` `-=` `*=` `/=` `%=` | Arithmetic |
| `&=` `\|=` `^=` | Bitwise / boolean |
| `<<=` `>>=` `>>>=` | Bit shifts |

```java
int score = 5;
score += 2; // score is now 7
```

</div>

::right::

<div class="text-base">

## Equality Operators

**`==` compares values**, producing `true` or `false`.

| Operator | Question |
| --- | --- |
| `==` | Equal? |
| `!=` | Not equal? |

```java
int score = 7;
boolean won = (score == 7);
// true
```

**Remember: `=` stores; `==` checks.**

For Strings use: `.equals()`

</div>

<style>
.two-columns { font-size: 18px; }
.two-columns p { margin-bottom: 12px; }
.two-columns table { font-size: 16px; width: 100%; margin: 0 0 16px; }
.two-columns th, .two-columns td { padding: 0.2rem 0.4rem; }
</style>

---
layout: two-cols
class: compact
brand: false
---

# Arithmetic and Unary

::left::

<div class="text-base">

## Arithmetic Operators

Basic math.

| Operators | Action |
| --- | --- |
| `+` `-` | Add, subtract |
| `*` `/` | Multiply, divide |
| `%` | Remainder |

```java
int remaining = 7 % 3; // 1
```

</div>

::right::

<div class="text-base">

## Unary Operators

Act on one value or variable.

| Operators | Action |
| --- | --- |
| `+` `-` | Keep sign, negate |
| `++` `--` | Add 1, subtract 1 |
| `!` | Flip a boolean |
| `~` | Flip every integer bit |

```java
int laps = 2;
laps++; // laps is now 3
```

Prefix `++` / `--`: update before use.
Postfix `++` / `--`: update after use.

</div>

<style>
.two-columns { font-size: 18px; }
.two-columns p { margin-bottom: 12px; }
.two-columns table { font-size: 16px; width: 100%; margin: 0 0 16px; }
.two-columns th, .two-columns td { padding: 0.2rem 0.4rem; }
</style>

---
layout: two-cols
class: compact
brand: false
---

# Comparisons and Logic

::left::

<div class="text-base">

## Relational Operators

Compare order or check an object's type. The result is a boolean.

| Operators | Question |
| --- | --- |
| `<` `>` | Less than, greater than? |
| `<=` `>=` | Less / greater or equal? |
| `instanceof` | Is this object this type? |

```java
int distance = 20;
boolean close = distance < 30;
// true
```

</div>

::right::

<div class="text-base">

## Logical Operators

Combine or invert boolean values.

| Operators | Action |
| --- | --- |
| `&&` `\|\|` | AND, OR (short-circuit) |
| `!` | NOT |
| `&` `\|` `^` | AND, OR, XOR (both sides) |

```java
boolean run = true && false;
// false: both must be true
```

Short-circuit: skip an unneeded right side.
XOR: exactly one input is true.

</div>

<style>
.two-columns h2 { font-size: 23px; }
.two-columns { font-size: 18px; }
.two-columns p { margin-bottom: 12px; }
.two-columns table { font-size: 16px; width: 100%; margin: 0 0 16px; }
.two-columns th, .two-columns td { padding: 0.2rem 0.4rem; }
</style>

---
layout: two-cols
class: compact
brand: false
---

# Bitwise and Ternary

::left::

<div class="text-base">

## Bitwise Operators

Work on individual bits of integers.

| Operators | Action |
| --- | --- |
| `&` `\|` `^` | AND, OR, XOR |
| `~` | Flip bits |
| `<<` `>>` | Shift left, signed right |
| `>>>` | Shift right, fill with zeros |

```java
int bits = 5 & 3; // 1
// 0101 & 0011 = 0001
```

</div>

::right::

<div class="text-base">

## Ternary Operator

**`? :`** chooses one of two values based on a boolean condition.

```java
boolean enabled = true;
double speed =
    enabled ? 0.5 : 0.0;
// speed is 0.5
```

`condition ? valueIfTrue : valueIfFalse`


</div>

<style>
.two-columns { font-size: 18px; }
.two-columns p { margin-bottom: 12px; }
.two-columns table { font-size: 16px; width: 100%; margin: 0 0 16px; }
.two-columns th, .two-columns td { padding: 0.2rem 0.4rem; }
</style>
---

# If Statements

Logic that executes code if a condition is met.
````md magic-move{lines: true}
```java
boolean isOver18 = true

if(isOver18) {
  System.out.println("You can vote");
} else {
  System.out.println("You cannot vote");
}
```
```java
int age = 16;

if(age >= 18) {
  System.out.println("You can vote");
} else if(age == 16 || age == 17){
  System.out.println("You can pre-register to vote");
} else {
  System.out.println("You cannot vote or pre-register");
}
```
````

---
layout: two-cols
class: compact
---

# Loops - while

::left::

Repeat while a condition is true.

```java
int batteryPercent = 3;

while (batteryPercent > 0) {
  System.out.println("Running");
  batteryPercent--;
}
```

::right::

## Watch the condition

The condition is checked before every pass. Here, `batteryPercent--` moves it toward `0`, so the loop ends.

If the condition never becomes false, the loop keeps running.

---
layout: two-cols
class: compact
brand: false
---

# Loops - for

::left::

Use a `for` loop when you know how many times to repeat.

```java
for (int lap=1; lap<=3; lap++) {
  System.out.println(lap);
}
```

Prints `1`, `2`, then `3`.

## Syntax
- `for (start; condition; update)`

- a lot of the time you will see `i` instead of `lap` but that variable can be anything.

::right::

## What happens

1. Set `lap` to `1`.
2. Check whether `lap <= 3`.
3. Run the code inside `{ }`.
4. Add one with `lap++`, then check again.

<br>
<br>

- The two semicolons separate the three parts.
- When the condition becomes false, the loop ends.
---
layout: section
---

# Methods and Scope
---

# Methods

A method (sometimes also called a function) is a named block of code you can use whenever you need it.

```java
public static void sayHello() {
  System.out.println("Hello");
}

public static void main(String[] args) {
  sayHello();
}
```

The method runs when you call its name with `()`.

---
layout: two-cols
class: compact
brand: false
---

# Methods - Parameters
::left::

- You can also pass data into a method for it to use.
- These pieces of data are called **parameters**.

````md magic-move
```java
public void setSpeed(
    double speed) {
    motor.set(speed);
}
```
```java
public void driveRobot() {
  setSpeed(0.75);
}
```
````
- In this example `speed` is a parameter.
- Whenever you call the method you pass in what you want speed to be.

::right::
- A method can also have a variable type it returns.

```java
public double add(
    double a, double b) {
    return a + b;
}
```

- The `void` keyword means the method returns no value.

---
brand: false
class: compact
---

# Methods - Overloading

- Overloading lets methods share a name but accept different parameters.
- Java chooses which method to run based on the arguments.
- The parameter lists can also differ in how many values they take.
````md magic-move
```java
public void setSpeed(double speed) {
  motor.set(speed);
}

public void setSpeed(double left, double right) {
  leftMotor.set(left);
  rightMotor.set(right);
}
```
```java
public void driveRobot() {
  setSpeed(0.5); //uses the first setSpeed method
}
```
```java
public void driveRobot() {
  setSpeed(0.5, 1); //uses the second setSpeed method
}
```
````

---

# Scope

Scope is where a variable can be used.

```java
int score = 5;

if (score > 0) {
  int bonus = 1; //this is called a "local variable"
  score += bonus;
}
```

`score` is available after the `if`. `bonus` is only available inside `{ }`.

---
layout: section
---

# Arrays, Enums, Switch Statements
---

# Arrays

An array stores several values of the same type.

````md magic-move
```java
int[] scores = {10, 20, 30};

System.out.println(scores[0]); // 10
```
```java
String[] colors = {"blue", "green", "red", "yellow"};

System.out.println(colors[2]); // red
```
````

Array positions start at `0`.
---

# Enums

An enum is a type of class (we will get to these) that is a group of constants.

```java
enum DriveMode {
  ARCADE, TANK
}

DriveMode mode = DriveMode.ARCADE;
```

Use an enum when a value should be one of a few choices.

---
class: compact
---

# Switch Statements

A `switch` runs different code for different values.

````md magic-move
```java
switch (mode) {
  case ARCADE:
    System.out.println("Arcade drive");
    break;
  case TANK:
    System.out.println("Tank drive");
    break;
}
```
```java
int number = new java.util.Random().nextInt(2);

switch (number) {
  case 0:
    System.out.println("heads");
    break;
  case 1:
    System.out.println("tails");
    break;
}
```
````

`break` ends the matching case.
---
layout: section
---

# Classes and Objects

---
layout: code
class: compact

---

# Classes

::code::

```java
public class Motor {
  double speed;

  public void setSpeed(double newSpeed) {
    speed = newSpeed;
  }
}
```

::note::
A class is a like blueprint or a template. It describes the data and methods its **objects** have. In this example `Motor` stores a number called speed and has a setSpeed method.

---
layout: two-cols
class: compact
brand: false
---

# Objects

::left::

## Class

`Motor` describes what a motor object has and what it can do.

## Object

An object is an actual instance of that class. `new` creates one.

::right::

```java
Motor leftMotor = new Motor();
leftMotor.setSpeed(0.5);
```

- Create a `Motor` object.
- Store a reference in `leftMotor`.
- Call its `setSpeed` method.

---
class: compact
brand: false
---

# Creating an Object

```java
Motor leftMotor = new Motor();
```

| Part | Meaning |
| --- | --- |
| `Motor` | The variable's type |
| `leftMotor` | The variable's name |
| `=` | Store the value on the right |
| `new Motor()` | Create a new object and get its reference |

This works the very simmilarly to way variables do, only the variable type is `Motor`.
`leftMotor` holds a reference that lets us reach the object.


<style>
table { font-size: 18px; width: 100%; margin: 16px 0; }
th, td { padding: 0.3rem 0.6rem; }
</style>

---
layout: code
class: compact
---

# Two Objects

::code::

```java
Motor leftMotor = new Motor();
Motor rightMotor = new Motor();

leftMotor.setSpeed(0.5);
rightMotor.setSpeed(0.2);

System.out.println(leftMotor.speed);  // 0.5
System.out.println(rightMotor.speed); // 0.2
```

::note::
Both objects have the same class, but each object has its own `speed` field.

---
layout: two-cols
class: compact
brand: false
---

# References

::left::

```java
Motor leftMotor = new Motor();
Motor sameMotor = leftMotor;

sameMotor.setSpeed(0.8);
```

Only one `new` runs here, so there is one object.

This is also the difference between primitive and reference variables.

::right::

- Both variables refer to that same object.
- Calling a method through either name affects it.
- `leftMotor.speed` is now `0.8` too.

Assigning a reference to another variable gives us another way to reach the same object.

---
class: compact
---

# Libraries and Imports

Libraries are just other code you can use for example...
- WPIlib, REV Hardware, PathplannerLib

```java
import com.revrobotics.spark.*;
import edu.wpi.first.wpilibj.XboxController;
```

- An `import` statement tells Java what class to import to that file.
- WPILib and **vendor libraries** supply these classes.
- We can use their methods without writing those classes ourselves.
- The `*` symbol means import all avalible classes from that package.

<!--
Sources:
https://api.ctr-electronics.com/phoenix6/stable/java/com/ctre/phoenix6/hardware/TalonFX.html
https://github.wpilib.org/allwpilib/docs/release/java/edu/wpi/first/wpilibj/XboxController.html
-->

---
class: compact
brand: true
---

# Example in FRC

```java
SparkBase motor = new SparkMax(config, kResetSafeParameters);
XboxController controller = new XboxController(0);
```

- `SparkBase` and `XboxController` are classes from libraries.
- `motor` and `controller` hold references to objects.
- Each `new` creates an object we can use through its variable.

The motor takes a config and a safe parameters setting. The controller uses Driver Station port `0`.

<!--
Sources:
https://api.ctr-electronics.com/phoenix6/stable/java/com/ctre/phoenix6/hardware/TalonFX.html
https://github.wpilib.org/allwpilib/docs/release/java/edu/wpi/first/wpilibj/XboxController.html
-->

---
layout: code
class: compact
---

# Using an Object

::code::

```java
XboxController controller = new XboxController(0);

double joystick = controller.getLeftY();
System.out.println(joystick);
```

::note::
The dot selects something on this object. `getLeftY()` reads this controller's left stick Y axis and returns a `double`.

<!--
Source: https://github.wpilib.org/allwpilib/docs/release/java/edu/wpi/first/wpilibj/XboxController.html
-->

---
layout: section
---

# Constructors

---
layout: code
class: compact
---

# A Constructor

::code::

```java
public class Motor {
  double speed;

  public Motor(double startingSpeed) {
    speed = startingSpeed;
  }
}
```

::note::
A constructor like a method that gets called whenever a new object of that class is created. Its name matches the class, and it has no return type, including no `void`.

---
layout: two-cols
class: compact
brand: false
---

# Calling a Constructor

::left::

```java
Motor motor = new Motor(0.5);
```

1. `new` creates the object.
2. `0.5` goes into `startingSpeed`.
3. The constructor stores it in `speed`.

::right::

```java
Motor left = new Motor(0.5);
Motor right = new Motor(0.2);
```

Each new object runs its constructor once when it is created.

These objects start with different speeds.

---
layout: code
class: compact
---

# Constructor Overloading

::code::

```java
public class Motor {
  double speed;
  public Motor() {
    speed = 0.0;
  }
  public Motor(double startingSpeed) {
    speed = startingSpeed;
  }
}
```

::note::
Both calls now work. If we write only the constructor with a parameter, `new Motor()` will not compile. We must also write the no-argument constructor to use that call.

---
class: compact
brand: false
---

# Constructors in FRC

```java
TalonFX motor = new TalonFX(3);
XboxController controller = new XboxController(0);
Pose2d position = new Pose2d(1.0, 2.0, new Rotation2d());
```

- `3` selects the motor controller's CAN device ID.
- `0` selects the controller's Driver Station port.
- `Pose2d` stores X and Y in meters and a rotation.

The arguments configure the object we are creating. They are different from arguments passed to an ordinary method later.

<!--
Sources:
https://api.ctr-electronics.com/phoenix6/stable/java/com/ctre/phoenix6/hardware/TalonFX.html
https://github.wpilib.org/allwpilib/docs/release/java/edu/wpi/first/wpilibj/XboxController.html
https://github.wpilib.org/allwpilib/docs/release/java/edu/wpi/first/math/geometry/Pose2d.html
new Rotation2d() represents a zero rotation. Pose2d and Rotation2d require their geometry imports.
-->

---
layout: section
---

# Fields - This - Examples

---
layout: code
class: compact
---

# Shooter Class

::code::

```java
public class Shooter {
  private double targetSpeed;
  public void setTargetSpeed(double speed) {
    targetSpeed = speed;
  }
  public double getTargetSpeed() {
    return targetSpeed;
  }
}
```

::note::
`targetSpeed` is a field. The setter changes it. The getter returns its current value.

---
layout: two-cols
class: compact
brand: false
---

# Fields and Parameters

::left::

## Field

```java
private double targetSpeed;
```

- Declared inside the class, outside methods.
- Stores data for the object between method calls.

::right::

## Parameter

```java
public void setTargetSpeed(
    double speed) {
  targetSpeed = speed;
}
```

`speed` receives a value for this call. The assignment copies it into the field.

---
layout: two-cols
class: compact
brand: false
---

# Local Variables

::left::

Inside a method:

```java
public void setTargetSpeed(
    double speed) {
  double requested = speed;
  targetSpeed = requested;
}
```

::right::

- `speed` is a parameter.
- `requested` is a local variable created inside the method.
- `targetSpeed` is the object's field.

Local variables are only available within their scope. If you want to keep a local variable outside it's scope you have to assign a field to it's value.

---
layout: code
class: compact
---

# The this Keyword

::code::

```java
public class Motor {
  private double speed;

  public Motor(double speed) {
    this.speed = speed;
  }
}
```

::note::
`this` means the current object. `this.speed` is its field. The plain `speed` on the right is the constructor parameter.

---
class: compact
brand: false
---

# Java Vocabulary

| Name | In our example |
| --- | --- |
| Class | `Shooter`, the type / blueprint |
| Object | The instance created by `new Shooter()` |
| Reference variable | `shooter`, how we reach that object |
| Field | `targetSpeed`, data stored in the object |
| Method | `setTargetSpeed()` or `getTargetSpeed()` |
| Parameter | `speed`, an input to a method call |
| Local variable | `currentTarget`, declared inside the caller's method |
| Return value | The `0.7` given back by `getTargetSpeed()` |

<style>
table { font-size: 18px; width: 100%; }
th, td { padding: 0.25rem 0.5rem; }
</style>
---
class: compact
brand: false
---

# Static Fields

```java
public class RobotSettings {
  public static final double DRIVE_SPEED = 0.5;
}
```

Use it with the class name:

```java
double speed = RobotSettings.DRIVE_SPEED;
```

`static` makes the field belong to the class. `final` means we cannot assign a new value to this field after initialization.

---
layout: section
---

# Access and Static

---
layout: two-cols
class: compact
brand: false
---

# Access Modifiers

::left::

## public

Other code can use a public method through the object.

```java
public void setTargetSpeed(
    double speed) {
  targetSpeed = speed;
}
```

::right::

## private

Only code inside this class can directly use this field.

```java
private double targetSpeed;
```

Public methods give other code a controlled way to work with private data.

---
layout: two-cols
class: compact
brand: false
---

# Class Methods and Object Methods

::left::

## Static method

```java
double amount = Math.abs(-0.5);
```

`abs` belongs to the `Math` class itself. We call it with the class name.

The result is `0.5`.

::right::

## Instance method

```java
double stick =
    controller.getLeftY();
```

`getLeftY()` uses a particular controller object.

Different controller objects can give different readings.

<!--
Sources:
https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html
https://github.wpilib.org/allwpilib/docs/release/java/edu/wpi/first/wpilibj/XboxController.html
-->

---
layout: section
---

# Inheritance

---
layout: two-cols
class: compact
brand: false
---

# The extends Keyword

::left::

```java
public class Animal {
  public void speak() {
    System.out.println(
      "Animal sound");
  }
}
```

`Animal` is the superclass / parent class. You can use methods defined there in any of it's child classes.

::right::

```java
public class Dog extends Animal {
}
```

`Dog` is the subclass / child class.
<br>
<br>
```java
Dog myPet = new Dog();
myPet.speak();
```


---
class: compact
brand: false
---

# Inheritance in FRC

```java
import edu.wpi.first.wpilibj2.command.SubsystemBase;

public class ShooterSubsystem extends SubsystemBase {
  public void shoot(speed){
    setShootSpeed(speed) //88%
    isShooting = true;
  }
}
```

- Our class builds on WPILib's `SubsystemBase`.
- The base class handles common subsystem setup.
- We add the fields and methods for our shooter.


<!--
Source: https://github.wpilib.org/allwpilib/docs/release/java/edu/wpi/first/wpilibj2/command/SubsystemBase.html
SubsystemBase registers subsystems with the command scheduler in its constructor.
-->

---
layout: section
---

# Interfaces

---
layout: code
class: compact
---

# An Interface

::code::

```java
public interface Drivable {
  void drive(speed);
  void stop();
}
```

::note::
An interface describes behavior a class should provide. This one requires a public `drive()` and `stop()` method, one of which has `speed` as a parameter.

---
layout: code
class: compact
---

# The implements Keyword

::code::

```java
public class PracticeDrive implements Drivable {
  public void drive(speed) {
    driveMotor.setSpeed(speed)
  }

  public void stop() {
    driveMotor.setSpeed(0.0)
  }
}
```

::note::
`implements Drivable` means that this class defines the methods in the `Drivable` interface. This class must provide the required method.

---
layout: two-cols
class: compact
brand: false
---

# Interfaces in Our Code

::left::

## Example Structure
```
Subsystems/Drive/
 ├── ModuleIO.java
 ├── ModuleSparkIO.java
 └── ModuleSimIO.java
```
- `ModuleIO.java` is an interface
- `ModuleSparkIO.java` implements that interface for a real robot
- `ModuleSimIO.java` implements that interface for the robot simulation

::right::

## Default
You can also have a method in an interface with a **default** definition. If you define that method in a class later it will be overriden.
```java
public interface Shooter {
  void default shoot(motor) {
    motor.setSpeed(0.75);
  }
  void default stop(motor) {
    motor.setSpeed(0.0)
  }
}
```

<!--
Sources:
https://docs.wpilib.org/en/stable/docs/software/commandbased/subsystems.html
https://github.wpilib.org/allwpilib/docs/release/java/edu/wpi/first/wpilibj2/command/SubsystemBase.html
-->

---
layout: section
---

# Override

---
layout: two-cols
class: compact
brand: false
---

# Customizing Inherited Behavior

::left::

In `ProcessMaterial.java`:

```java
public class ProcessMaterial {
  public void cut(material) {
    if material == wood {
      bandsaw.cut();
    } else if material == metal {
      cnc.cut();
    }
  }
}
```

::right::

In `NoPowerTools.java`:

```java
public class NoPowerTools extends ProcessMaterial {
  @Override
  public void cut(material) {
    if material == wood {
      handsaw.cut();
    } else if material == metal {
      System.out.println(
        "can't cut without CNC")
    }
  }
}
```

---
layout: section
---

# END