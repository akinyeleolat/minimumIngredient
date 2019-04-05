# minimumIngredient

# Description
Countries is a RESTful API for adding, retrieving and deleting country list. It's aimed to showcase building RESTful API with data structures.
MinimumIngredeient is a RESTful API for getting meal with minimum Ingredients from themeal.db API base on the set of meals' id supplied. It's aimed to showcase 
<ul>
<li>building a RESTful API by consuming API services inside your nodeJs App.</li>
<li>Dockerizing a nodeJs App</li>
</ul>
# Table of Contents
<ul>
            <li>
                <a href="#Technologies">Technologies</a>
            </li>
            <li>
                <a href="#Features">Features</a>
            </li>
          <li>
                <a href="#Installations">Installation</a>
            </li>
        </ul>
        
# Technologies
<ul>
<li>Nodejs (Express framework)</li>
  </ul>

# Features
<ul>
<li>Get Minimum Ingredients</li>
<li>Get Meal by meal ID</li>
</ul>

# Getting Started
# Installation
<ul>
<li>git clone https://github.com/akinyeleolat/minimumIngredient.git</li>
<li>Open terminal</li>
<li>cd minimumIngredient</li>
<li>git checkout develop</li>
</ul>

## 1. Build Docker Image
### Go to Directory that has your Docker file (ignore if you are already there, you can confirm by running 
```bash 
$ ls
```
### Run this command
```bash
$ docker build -t <your username>/minimumIngredient .
```
## 2. Run Docker Image</li>
### Run the following command 
```bash
$ docker run -p 8081:8080 -d <your username>/minimumIngredient
```
## Print the output of your app

### Get container ID
```bash
$ docker ps
```
### Print app output
```bash
$ docker logs <container id>
```


# Test with Postman
### 1. install POSTMAN app
### 2. Get the port for the docker container
```bash
$ docker ps
```
### 3. navigate to localhost:PORT/endpoints on POSTMAN

# API Endpoint Route
<table>
  <tr>
    <td>HTTP VERB</td>
    <td>ENDPOINT</td>
    <td>TASK</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>api/meal/?mealID=mealID1,mealID2,mealID3,mealID4</td>
    <td>Get meal ID with minimum ingredients</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>api/:mealID</td>
    <td>Get meal information base on ID</td>
  </tr>
  </table>
  
# Author
Akinyele Oluwatosin