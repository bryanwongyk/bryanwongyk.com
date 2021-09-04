---
date: 'September 4, 2021'
dateReverseOrder: 2021-09-04
title: AWS Lambda High-Level Overview
description: From a newbie's perspective
readingTime: '4 min read'
author: Bryan Wong
featuredImage: AWS-Lambda-High-Level-Overview.png
path: '/AWS-Lambda-High-Level-Overview'
type: blog
---

## 😵‍💫 What is it?

### Functions-as-a-service

We can define functions ('Lambda functions') on the AWS Lambda console that trigger based on 'events'.

For example, we can define a function that triggers when a HTTP request is made. Other events could be events triggered by other AWS services.

These functions can be written in Node.js, Java, C#, Python, Ruby, Go, or PowerShell.

### Example Use-Case: Basic Web Application

In a basic web application, we might have a Node.js back-end where we define an API with endpoints for HTTP requests (e.g. with Express), and code which triggers on these end points.

When we deploy this web application to the public, the back-end would need to be deployed on some server (on the cloud or your own hardware) so that requests can be made to it.

Alternatively, with AWS Lambda you can:

-   Define Lambda functions
-   Invoke/call the functions from your front-end through:
    -   Using the Lambda API or;
    -   Creating API end-points on Amazon API Gateway that trigger the Lambda functions

## 😫 Why is it used?

### AWS Lambda vs. Your Own Server in the Cloud

**AWS Lambda**

-   Pay per request made to a Lambda function as it runs only when the functions are triggered
-   Suitable for applications or scripts with lots of idle time (only need to be run on demand)
-   Automatically handles infrastructure for you based on demand (e.g. security, resource management, scaling)

**Your Own Server in the Cloud (e.g. AWS EC2)**

-   Pay per period of time as it runs continuously
-   Suitable for high-performance or frequently running applications
-   Need to manually configure and manage infrastructure

## Got something wrong?

This is part of my initiative to learn in public where I post tidbits whenever I feel like it for my own growth, and to potentially even help someone.

If you see anything wrong, connect with me on Twitter or LinkedIn and please let me know on [Twitter](https://twitter.com/bryanwongyk) or [LinkedIn](https://www.linkedin.com/in/bryanwongyk/). Cheers!
