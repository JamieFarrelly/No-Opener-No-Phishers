# No Opener, No Phishers
Chrome extension to reduce the risk of falling victim to phishing attacks. Read my blog post about this for more info: [Browsers are broken, but nobody cares. All it took was 1 line of code to fix it.](https://medium.com/@Jamie_Farrelly/browsers-are-broken-but-nobody-cares-all-it-took-was-1-line-of-code-to-fix-it-f8af13c18cff).

Overview
--------------------------

Any website that uses target="_blank" on their links, allows user generated content and doesn't use the rel="noopener" attribute on 
their links (I'm looking at you Facebook, Twitter etc.) is vulnerable to a scarily simple phishing attack.

I've made an example of how this type of phising attack could take place so people can realise how dangerous it can be, which is also
on [Github](https://github.com/JamieFarrelly/Rel-NoOpener-Example).

This Chrome extension is as simple as it gets, all it does is add "noopener noreferrer" to the rel attribute on all links on the pages
that you're visiting. It's literally one line of code.
```javascript
$('[target="_blank"]').attr("rel", "noopener noreferrer");
```


Installation
--------------------------
[Download from the Chrome Store](https://chrome.google.com/webstore/detail/hieejlcohhkjbpiihgphcnaaiehphike)
