---
title: Resources to Get You Started Building a custom  ChatGPT Powered AI Assistant Chatbot
subtitle: Learn How to Build an Intelligent Chatbot for Quick and Accurate Information Retrieval from a Knowledge Base with OpenAI Chat Completion API.
date: "2023-12-27"
---

ChatGPT has taken the world by storm with its ability to perform a wide range of tasks, from simple to complex. One increasingly popular use case is building chatbots that can answer questions written in natural language from a given knowledge base - something that ChatGPT alone cannot do unless it is trained on the specific knowledge base data. Today, there are products available that allow you to chat with various custom knowledge bases, including blogs, podcasts, documentation, and books. By using natural language, you can ask any question related to the knowledge base's domain, and the chatbot will provide an answer.

To build such chatbots, there are some fundamental steps you need to follow. In this blog, we'll review three resources that teach you how to build a custom ChatGPT that can be integrated with your knowledge base. We'll explore how to build an AI that can answer questions about your website, how to create an OpenAI Q&A bot with ChatGPT API + embeddings, and how to use embeddings-based search for question answering. With these resources, you'll be well on your way to building a powerful chatbot that can answer questions from your given knowledge base with ease.

<h3 ><a  target="_blank" href="https://platform.openai.com/docs/tutorials/web-qa-embeddings">
<span style="color:#50C878">
    1 How to build an AI that can answer questions about your website
</span>
</a></h3>

This tutorial by openAI provides a simple yet effective approach to building an AI that can answer questions about your website. The tutorial provides a step-by-step guide that covers all the necessary components required to build the chatbot. The tutorial starts by walking through how to crawl a website, turns the crawled pages into embeddings using the OpenAI Embeddings API, and then creates a basic search functionality that allows a user to ask questions about the embedded information.



The tutorial assumes that the reader has some basic knowledge of Python and GitHub. Before diving in, the reader is advised to set up an OpenAI API key and walk through the quickstart tutorial to have an understanding of how to use the API to its full potential. The main programming language used in this tutorial is Python, along with popular packages such as Pandas, transformers, NumPy, and others.


The tutorial provides the full code on GitHub, which the reader can clone. Alternatively, the reader can follow along and copy each section into a Jupyter notebook and run the code step by step, or simply read along. The tutorial also provides useful functions to remove extra spacing and new lines, which can clutter the text and complicate the embeddings process.


Overall, this tutorial provides an excellent starting point for building more sophisticated chatbots that make use of custom knowledge bases. The tutorial is suitable for both beginners and experienced programmers, and the step-by-step guide makes it easy to follow along. If the reader runs into any issues working through this tutorial, they can ask a question on the OpenAI Community Forum.


<h3><a target="_blank" href="https://www.youtube.com/watch?v=RM-v7zoYQo0" >

<span style="color:#50C878">
2 How to create an OpenAI Q&A bot with ChatGPT API + embeddings</span>
</a></h3>

<a href="https://www.youtube.com/watch?v=RM-v7zoYQo0">
<img src="http://img.youtube.com/vi/RM-v7zoYQo0/0.jpg">
</a>

In this video tutorial, you'll learn how to build a chatbot that allows you to chat with Paul Graham's essays. The presenter will guide you through the process step-by-step, starting with the setup process, where you'll install and configure the necessary software tools. Even if you're a beginner, the presenter will ensure that you can follow along by providing clear explanations.


The tutorial will then cover how to scrape links and extract data from websites, as well as how to scrape and chunk essays to prepare them for the chatbot. You'll also learn about embeddings and databases and how to convert text data into numerical representations that the chatbot can understand.


Additionally, the tutorial will cover creating an API with streaming, which enables the chatbot to handle large amounts of data in real-time. Finally, you'll learn about user interface design and how to create an intuitive and easy-to-use interface for the chatbot.


Overall, this video tutorial provides a comprehensive and in-depth guide to building a chatbot that can answer questions about Paul Graham's essays. The explanations are clear and easy to follow, making it a valuable resource for both beginners and experienced programmers.

<h3><a target="_blank" href="https://github.com/openai/openai-cookbook/blob/main/examples/Question_answering_using_embeddings.ipynb" >

<span style="color:#50C878">3 Question answering using embeddings-based search</span>
</a></h3>


The OpenAI Cookbook's "Question answering using embeddings-based search" chapter provides a detailed and practical explanation of a two-step Search-Ask method for enabling GPT to answer questions using a library of reference text. The chapter addresses the limitations of GPT's ability to answer questions on unfamiliar topics and suggests using a search-based approach rather than fine-tuning the model.

The chapter covers the search process comprehensively, including lexical-based, graph-based, and embedding-based search methods. It suggests starting with embedding-based search as it works well with questions that often don't lexically overlap with their answers.

Furthermore, the chapter outlines a step-by-step procedure for implementing the Search-Ask method, including preparing search data, collecting, chunking, embedding, and storing the data. It also provides a detailed explanation of the search process, which involves generating an embedding for the query, ranking the text sections by relevance, and asking the question to GPT.

Overall, the OpenAI Cookbook's chapter on "Question answering using embeddings-based search" is an excellent resource for those looking to build chatbots or question-answering systems. The chapter is well-written and easy to follow, providing practical guidance for implementing the Search-Ask method. Additionally, the accompanying Jupyter notebook demonstrates the implementation of the Search-Ask method, making it easy to replicate the process.


<h3><span style="color:#50C878">Closing Thoughts</span>
In conclusion, building an AI assistant chatbot that can answer questions about documents, websites, or any other topic can seem like a daunting task, but there are many resources available to help. The three resources discussed in this article provide comprehensive and detailed guides to building chatbots using different approaches, such as embeddings-based search and APIs. The tutorials are suitable for both beginners and experienced programmers and provide step-by-step instructions, code snippets, and helpful tips to guide the user through the process. With these resources, anyone can start building their own AI assistant chatbot to chat with their custom knowledgebase.



