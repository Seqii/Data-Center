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

