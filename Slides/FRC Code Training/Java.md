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
  - "Machine Language"
  - Stored in `.class` files (for Java)

### JVM
- Java Virutal Machine
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
/* as you may have noticed every line in java ends in a 
semicolon */

System.out.println("Hello World");

String firstname = "Gavin";
  
int age = 16;

```
```java
int age = 16;
String firstname = "Gavin"; //Strings use double quotes
char initial = 'P' //chars use single quotes

public static void main(String[] args) {
  System.out.println("Name: " + firstname);
  System.out.println("Last Inital: " + inital)
  System.out.println("Age: " + age)
}
```
```
Name: Gavin
Last Inital: P
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
boolean won = (score == 7); // true
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
double speed = enabled ? 0.5 : 0.0;
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

# If Statments

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
  System.out.println("You can pre-register to vote")
} else {
  System.out.println("You cannot vote or pre-register");
}
```
````
---

# Loops

A loop executes a block of code multiple times.

