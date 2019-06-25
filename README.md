# cyste

**Cyste** is a helper to ease the use of the JavaScript `localStorage` object of the browser

- on GitLab: [https://gitlab.com/k33g/cyste](https://gitlab.com/k33g/cyste)
- on GitHub: [https://github.com/k33g/cyste](https://github.com/k33g/cyste)

## Usage

```javascript
cyste.setItem("german_salutation", "Morgen")
cyste.setItem("english_salutation", "Hello")
cyste.setItem("french_salutation", "Salut")

cyste.items.filter(item => item[0].includes("salutation")) // 3 records
cyste.items.find(item => item[0].includes("salutation")) // 1 record ["german_salutation", "Morgen"]

cyste.items.forEach(item => console.log("key:", item[0], "value:", item[1]))
```

## TODO

- more examples