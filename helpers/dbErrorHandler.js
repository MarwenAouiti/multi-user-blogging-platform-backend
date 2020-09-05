'use strict';

/**
 * Get unique error messages
 */

const uniqueMessage = (error) => {
  let output;
  try {
    let fileName = error.message.substring(
      error.message.lastIndexOf('.$') + 2,
      error.message.lastIndexOf('_1')
    );
    output =
      fileName.charAt(0).toUpperCase() + fileName.slice(1) + ' already exists';
  } catch (ex) {
    output = 'Unique field already exists';
  }
  return output;
};

/**
 * Get the error message from object
 */
exports.errorHandler = (error) => {
  let message = '';
  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (let errorName in error.errors) {
      if (error.errors[errorName].message) {
        message = error.errors[errorName].message;
      }
    }
  }
  return message;
};
