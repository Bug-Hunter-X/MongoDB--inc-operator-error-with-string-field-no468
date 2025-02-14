# MongoDB $inc operator error with string field

This repository demonstrates a common error when using the `$inc` operator in MongoDB queries with string fields.

## Problem

Attempting to increment a string field using the `$inc` operator results in an error because this operator is designed for numerical fields. 

## Solution

Ensure the field you are incrementing is of type `Number`. If you are storing ages as strings, you'll need to update your database schema to use a numeric type.