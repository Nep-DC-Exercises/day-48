# Returning JSON from created API

## Date: 11/4/19 W11 D1 D48

### Summary

We learned that it's fairly simple to return json data within a Controller/Route. In this exercise, we went back into our apple_ceos express app that we've used before and modified the index route to return a JSON object that represents all of the apple ceos in our postgres database.

```javascript
res.status(200).json(data)
```

This information was used to power the view but with this modification, a JSON object is returned instead. After writing our own API, it's clearer to me how API's are a set of pre-defined entry ways into someone elses database. Instead of writing SQL queries directly to an external database, you just use a developer's predefined routes that return the data for you to use how you see fit.
