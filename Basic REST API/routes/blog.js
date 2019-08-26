const express = require("express");
// Including the logic in controller & including that module here
const blogController = require("./../controllers/blogController");
const appConfig = require('./../config/appConfig')


let setRouter = (app) => {

  let baseUrl = appConfig.apiVersion+'blogs';

  app.get(baseUrl+'/all',blogController.getAllBlog);
  app.get(baseUrl+'/view/:blogId',blogController.viewByBlogId);
  app.get(baseUrl+'/view/by/author/:author',blogController.viewByAuthor);
  app.get(baseUrl+'/view/by/category/:category',blogController.viewByCategory);
  app.post(baseUrl+'/:blogId/delete',blogController.deleteBlog)
  app.put(baseUrl+'/:blogId/edit',blogController.editBlog);
  app.post(baseUrl+'/create',blogController.createBlog);
  app.get(baseUrl+'/:blogId/count/view', blogController.increaseBlogView);
  

  app.get('/hello-world', blogController.helloWorld);
  app.get('/example', blogController.printExample);
  app.get('/test/route/:param1/:param2', blogController.testRoute);
  app.get('/test/query', blogController.testQuery);
  app.post('/test/body', blogController.testBody)
  
 
}; // end setRouter function

module.exports = {
  setRouter: setRouter
};
