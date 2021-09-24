Loading a script dynamically. 
For example when you have to load different scripts based on enviroment.

```
const loadScript = function(url) {
  return new Promise(function(resolve, reject) {
    const script = document.createElement('script');
    script.src = url;

    script.addEventListener('load', function() {
        // The script is loaded completely
        resolve(true);
    });

    document.head.appendChild(script);
  });
};

<script>
  const prod = "foo-some-url";
  const dev = "bar-some-url"

  const loadScript = function(url) {
    return new Promise(function(resolve, reject) {
      const script = document.createElement('script');
      script.src = url;

      script.addEventListener('load', function() {
          // The script is loaded completely
          resolve(true);
      });

      document.head.appendChild(script);
    });
  };

  loadScript(
    window.location.host === 'prod-url' ? dev : prod
  )
</script>
```