---
date: 'November 27, 2022'
dateReverseOrder: 2022-11-27
title: Simple Guide On How To Make A JSON RPC Request via Postman or cURL with Jackson and SPring
description: From a newbie's perspective
readingTime: '4 min read'
author: Bryan Wong
featuredImage: ./AWS-Lambda-Explained-Simply-2.png
path: '/How-To-Make-A-JSON-RPC-Request-On-Postman'
type: blog
---

## 😵‍💫 What is it?

JSON-RPC is a remote procedure call protocol. In other words, a way to make a request (encoded in JSON) to invoke a method in another server/service. When building a Spring application, Jackson provides multiple ways of deserialising your JSON request into Java/Kotlin objects.

## 🧐 How to make a basic JSON-RPC call on Postman

1. Change the request type to 'POST'
2. Add the URI address to make a request to.
3. Click on the 'Body' tab and select 'raw'. This is where we will define our request which could look like this:

```
{

"jsonrpc": "2.0",

"id": 1,

"method": "yourRpcMethod",

"params": [

    {

        "userId": "some-id",

        "userDetails": {

            "firstName": "Bryan",

            "lastName": "Wong"

        }

    }

    ]

}

```

We can keep the first two key-value pairs the same:

-   `jsonrpc`: Indicates the JSON-RPC specification type.

-   `id`: Only matters if you are using JSON-RPC in the context of asynchronous or batch calls (e.g. multiple JSON-RPC calls in a single request) which then allows you to map the responses back to your requests. We do not need this in our context as we are making a single JSON-RPC call in a single HTTP request.

We can modify the next two as we need them:

-   `method`: The method/function name we are invoking.

-   `params`: The list of parameters to pass in the request.

### Parameter format

Our parameters can either be in a _positional_ or _named_ format.

Named means that you can provide your parameters in any order, but the use of key-value pairs allows us to map each key to a particular parameter. They need to be wrapped in curly braces {}. The previous example used named parameters. Think of it like providing a JSON object inside the params array.

Positional means that you do not have to specify any keys but the parameters in your request must be in the same order as the arguments specified in. They need to be wrapped in square brackets []. Think of it like providing an array of arguments. For example:

```

{

"jsonrpc": "2.0",

"id": 1,

"method": "yourRpcMethod",

"params": [

"some-id",

{

"firstName": "Bryan",

"lastName": "Wong"

}

]

}

```

I tend to use named parameters when I am working with methods which have many arguments, and positional for simple methods.

## How to make a JSON RPC call with a polymorphic-type parameter

Here are two approaches on how to explicitly specify a type of a parameter which could be of multiple subtypes/subclasses.

### Using the @c annotation

Generally, we can use the `@c` annotation which is where Jackson uses the minimal path of the class name as the type identifier (see `JsonTypeInfo.Id.MINIMAL_CLASS for more information`).

For example, say our request required a parameter of type Shape that had sub-types of Square and Rectangle like in this Kotlin code:

```

sealed class Shape {

data class Square(val lengthInCentimetres: Int)

data class Rectangle(val lengthInCentimetres: Int, val widthInCentimetres: Int)

}

```

If we wanted to make a JSON-RPC request that passed in a parameter of type Square, we can specify a sub-type like so:

```kotlin

{

"jsonrpc": "2.0"

"id":1,

"method":"someMethod",

"params": [

{

“@c”: “.Shape$Square”,

"lengthInCentimetres": "10"

}

]

}

```

### Using a Jackson-specified type property

You can use the annotations `@JsonTypeInfo` to specify an explicit 'type' property and `@JsonSubTypes` to specify how to refer to your sub-types.

For example, say this Jackson configuration was added to our Shape class:

```

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")

@JsonSubTypes(

JsonSubTypes.Type(value = Square::class, name = "SQUARE"),

JsonSubTypes.Type(value = Rectangle::class, name = "RECTANGLE"),

)

sealed class Shape {

data class Square(val lengthInCentimetres: Int)

data class Rectangle(val lengthInCentimetres: Int, val widthInCentimetres: Int)

}

```

`JsonTypeInfo.Id.NAME` indicates that we want to use the name of the type to infer the actual type.

`JsonTypeInfo.As.PROPERTY` indicates that we want to specify an explicit property alongside our other parameters in which we will include our type information. `property` indicates the name of that property.

Again, to make a JSON-RPC request to pass in a parameter of type Square we can do it like this:

```kotlin

{

"jsonrpc": "2.0"

"id":1,

"method":"someMethod",

"params": [

{

"type": "SQUARE",

"lengthInCentimetres": "10"

}

]

}

```

## Parameters

Your parameters can either be in a positional or named format.

If they are named, they need to be wrapped in curly braces {}.

If they are positional, they need to be wrapped in square brackets [].

## Got something wrong?

I am always still learning. If you see anything wrong, please let me know on [Twitter](https://twitter.com/bryanwongyk). Cheers!
