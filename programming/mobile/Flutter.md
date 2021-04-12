## Flutter Framework 

Links
- [Pragmatic State Management in Flutter](https://www.youtube.com/watch?v=d_m5csmrf7I&t=112s)
- [What's new in Flutter 2.0](https://medium.com/flutter/whats-new-in-flutter-2-0-fe8e95ecc65)
### BuildContext
- [Standard gitignore](https://gist.githubusercontent.com/Cheesetouched/ace446b9e6bedef76eb4fb7afb1ea164/raw/45b2ffeec5a05374e20a8578e6ac04e23b1edbb1/.gitignore)
- [Pattern Matching](https://github.com/dart-lang/language/blob/master/working/0546-patterns/patterns-feature-specification.md)

How does BuildContext work?

- Is a tool that helps handle the location of a widget inside of a widget tree
- Every Widget has a build function that takes a BuildContext
- Not all widgets have a user accessible context. (i.e Text Widget) 
- Build Context is created widget by widget
- Every widget tree has a root widget, and is the first widget passed to runApp


3 WRONG assumptions about BuildContext
1. Each BuildContext is the same name, so it's all the same build context.
    - context is just a name for a build context instance
    - the values of context are not the same
    - think of BuildContext as the context for a given widget
2. If a widget doesn't expost a BuildContext then it doesn't have a BuildContext
    
3. The child BuildContext is not related to the parent BuildContext


Links
- [BuildContext In-Depth Explanation](https://www.youtube.com/watch?v=iNgwFMm3opE)


## CI

See documentation around [fastlane](/programming/ci-cd/fastlane.md) for a comprehensive guide to setting up CI/CD in Flutter

## Accepting Licenses

### Android Licenses

```
export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/jdk/Contents/Home
yes | ~/Library/Android/sdk/tools/bin/sdkmanager --licenses
```

```
flutter doctor --android-licenses
```

## Architecture / Design / Widgets

Links
- [Bottom navigation](https://material.io/components/bottom-navigation/flutter#using-bottom-navigation)
- [Getting to the Bottom of Navigation in Flutter](https://medium.com/flutter/getting-to-the-bottom-of-navigation-in-flutter-b3e440b9386)
- [Flutter Bottom Navigation Bar with Multiple Navigators: A Case Study](https://codewithandrea.com/articles/multiple-navigators-bottom-navigation-bar/)
- [CupertinoTabScaffold class](https://api.flutter.dev/flutter/cupertino/CupertinoTabScaffold-class.html)
- [State Management With Provider](https://www.raywenderlich.com/6373413-state-management-with-provider)

### PageView Widget

Allows Android Swipeable style of pages


