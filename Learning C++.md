(from some random dude on reddit)

I started with Java, but when I tried learning C++ I got really caught up with the concept of pointers. Turns out, Java uses pointers all the time -- they're just called references in Java. The main difference I see with C++ is that you're not forced to allocate every object on the heap (using new), but you can allocate them on the stack like any normal primitive.

Some things you need to get used to are headers. In Java, you define your class and the implementation of that class in the same file. In C++ the definition of the class goes in the header, and the implementation of the functions goes in the .cpp file.

You should also read up on the preprocessor. All the statements that start with # (#include, #define, #if, etc) are preprocessor macros. They are executed at compile-time (or actually before compile-time) and not run time. They are used to transform the code before it's run through the compiler.

In terms of actually compiling, a standard Makefile is good to get your project up and running. I see most projects using cmake, but TBH I don't do enough large-scale C++ to know how to get that set-up.

For your development environment, linux is your development environment. It's like the whole OS is an IDE. You can also develop directly on Windows with Visual Studio, but I prefer to use WSL. You don't have to deal with a VM or dual booting, and you can access a (mostly) full linux environment through a terminal right within Windows. I tend program directly in VS Code and then use the WSL terminal to compile and run the program. Software made this way will not directly run on windows (unless you code with mingw in mind), but they will run on linux and WSL (for me, running in WSL is essentially running on windows).

You should also be aware of all the versions of C++ out there (c++98, c++03, c++11, ...). The newer ones support the features that people call "modern" C++ -- smart pointers for example. I've heard a lot of people say you shouldn't really use raw pointers (the *'s), and should only use smart pointers. I've also heard you shouldn't use 'new' but I'm not too sure what their alternative is.

Just keep in mind which C++ features are "modern" and which are not. For example, you shouldn't use old-style casting (c-style casting, like in Java, with parentheses), but instead use the in-build static_cast, dynamic_cast.

Also to keep in mind is in Java, you don't really care about memory management -- everything (for the most part) works out. But in C++ you need to decide if you want to allocate on the stack or on the heap. If you allocate on the stack that's static memory allocation, and the heap is dynamic memory allocation. As a rule of thumb, I try to do almost everything on the stack or use pre-allocated memory, and try to avoid using the heap at all costs (there are exceptions). For reference, all objects in Java use the heap. In C++, you have the choice of using the heap or not.

Exceptions are a lot different in C++ than in Java. They are 'expensive' and generate a lot of code (from what I've read and heard), and aren't as nice (IMO) as Java's exceptions. You can do some research on them and decide for yourself, but from what I've seen, the usual way to handle errors, and the way errors are handled in linux, is that the return value of a function is -1 (usually, it depends on the function, read the manpages for an exact description of each system call) on error.

There are a few things I've forgotten to mention, but this should give you a good idea of what you're getting into. C++ and Java have a lot of similarities, but also a lot of differences. You should feel pretty comfortable coming from Java to C++ if you keep in mind what I've mentioned. The syntax is mostly similar but the way things work can be pretty different, especially when it comes to memory.

Disclaimer: I am a Java developer by profession, C++ by hobby.

For references, use
The manpages: http://man7.org/linux/man-pages/index.html
cppreference: https://en.cppreference.com/w/
stackoverflow
