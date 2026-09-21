---
theme: ./theme
title: MPArors FRC Programming
info: false
author: MPArors Robotics Team 3926
layout: title
---

# FRC Programming

::subtitle::
Java foundations

<!-- Layout: title. Use a short title plus the optional subtitle slot. -->

---
layout: text
---

# A variable stores a value

A variable gives a name to information your program uses.

- `double speed = 0.5;` stores a decimal number.
- `boolean enabled = false;` stores a true or false value.
- A clear name explains what the value means.

<!-- Layout: text. Default body type is Lexend, 18 pt at the source deck size. -->

---
layout: caption
image: /images/mparor-logo.png
imageBackground: '#FFFFFF'
alt: MPAror Robotics Team 3926 logo with a penguin and blue gear
---

MPArors Robotics, Team 3926

<!-- Replace image with a robot photo or screenshot in public/images/. -->

---
layout: section
---

# Methods

---
layout: two-cols
---

# Values and decisions

::left::

## Variables

A variable stores one piece of information.

- A speed request
- A sensor reading
- Whether a button is pressed

::right::

## Conditions

An `if` statement chooses which code runs.

- Is the request positive?
- Has the value changed?
- Is the button pressed?

---
layout: title-only
---

# Live coding

<!-- The open canvas below the title can hold your demo or a custom component. -->

---
layout: one-column
---

# Return values

A method can calculate a result and return it to the caller.

Here, `square(3.0)` returns `9.0`.

::right::

```java
static double square(double value) {
    return value * value;
}

// Call the method.
double result = square(3.0);
```

---
layout: main-point
---

# Clear names make code easier to read

---
layout: section-description
---

# Practice

::subtitle::
Reading Java

::right::

Predict each value before running the code.

Explain which expression produces the result.

Then change one input and compare your prediction.

---
layout: big-number
---

# 3926

::caption::
MPArors Robotics

---
layout: blank
---

<!-- An intentionally empty canvas, retaining the source theme's corner logo. -->

---
layout: image
image: /images/mparor-logo.png
imageBackground: '#FFFFFF'
alt: MPAror Robotics Team 3926 logo
---

# Our team

::caption::
Replace this image with a robot photo, wiring diagram, or editor screenshot.

---
layout: code
---

# A method with a return value

::code::

```java
static double clamp(double value) {
    if (value > 1.0) {
        return 1.0;
    }
    if (value < -1.0) {
        return -1.0;
    }
    return value;
}
```

::note::
This example keeps a value between −1.0 and 1.0.

---
layout: code-split
---

# Tracing an expression

::left::

Start with a request of `0.8`.

Multiplying by `0.5` gives `0.4`.

What happens if the request is negative?

::right::

```java
// A calculation example.
double request = 0.8;
double scale = 0.5;
double output = request * scale;

System.out.println(output);
```
