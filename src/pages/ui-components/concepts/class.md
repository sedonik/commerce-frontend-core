---
title: uiClass library | Commerce Frontend Development
description: Learn about the foundational class on which all Adobe Commerce and Magento Open Source UI components are based.
---

# uiClass library

The `uiClass` is an abstract class from which all components are extended. The `uiClass` is a low-level class and is rarely used as direct parent for UI components' classes.

`uiClass` source code is `<Magento_Ui_module_dir>/view/base/web/js/lib/core/class.js`, in the Magento Open Source GitHub repository: [app/code/Magento/Ui/view/base/web/js/lib/core/class.js](https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/lib/core/class.js)

## Commonly used methods

The uiClass class introduces the architecture of UI components through the following methods:

*  The `extend()` method implements inheritance of UI components. The `extend()` returns new class. The `extend()` method gets a JavaScript object as a parameter, and then extends the base object with the properties and methods of the argument's object. The properties of the argument's object have higher priority than base object's properties.
   As an example:
    %componentName%.extend(%JavaScript_extender_object%);

*  The `initConfig()` method processes the UI component's configurations. The `initConfig()` method gets as a parameter the JavaScript configuration object, which is then merged with the default configuration (declared in the UI Component that calls the `initConfig()` method) and in the parent UI component. This resulting configuration is then set as first level properties in the current UI component instance.

  As an example:

  ```js
  defaults: {
      myFirstProperty: 0,
      mySecondProperty: 1
  }

  //Before executing initConfig method:
  console.log(this.myFirstProperty) // Undefined
  console.log(this.mySecondProperty) // Undefined

  //After executing initConfig method:
  console.log(this.myFirstProperty) // 0
  console.log(this.mySecondProperty) // 1
  ```

*  The `initialize()` method is called during instantiation. It can be used to add custom functionality executed only once, during component instance creation.

  As an example:

  ```js
  initialize: function () {
      %yourMethodName%();

      return this;
  }
  ```

*  The `_super()` method calls the parent UI component method with the same name as the `_super()` method's caller. If that method does not exists in the parent UI component, then the method tries to find it higher in the inheritance chain.

  As an example:

  ```js
  initialize: function () {
      this._super(); //_super will call parent's `initialize` method here

      return this;
  }
  ```

## Commonly used properties

The `defaults` property declares the list of properties of a UI component's instance. Also it declares communications between components if needed.

As an example:

```js
defaults: {
    %yourCustomProperty%: '',
    imports: {
        %yourCustomProperty%: '%anotherComponentLink%',
        disabled: 'checked'
    }
}
```
