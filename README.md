## View

Accept inline style props with view props


Using styles const is annoying, specially for simple task
```
<View style={styles.container}>
  <Text>pets</Text>
</View>
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10
  }
})
```

What if we could pass styles and props as direct property
```
<View paddingLeft={10} onLayout={handleLayout}>
  <Text>pets</Text>
</View>
```

### installation
```
npm install @nzmedet/view-on-steroids
```

### usage
Add style and view props to view
```
import View from 'view-on-steroids'

// accepts ViewStyleProps and ViewProps as props
<View backgroundColor='red' pointerEvents='none'>
  children
</View>

```