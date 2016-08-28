# No Opener, No Phishers
Chrome extension to reduce the risk of falling victim to phishing attacks.

Overview
--------------------------

Any website that uses target="_blank" on their links, allows user generated content and doesn't use the rel="noopener" attribute on 
their links (I'm looking at you Facebook, Twitter etc.) is vulnerable to a scarily simple phishing attack.

I've made an example of how this type of phising attack could take place so people can realise how dangerous it can be, which is also
on [Github](https://github.com/JamieFarrelly/Rel-NoOpener-Example).

This Chrome extension is as simple as it gets, all it does is add "noopener noreferrer" to the rel attribute on all links on the pages
that you're visiting. It's literally one line of code.
```javascript
$("a").attr("rel", "noopener noreferrer");
```


Installation
--------------------------
[Download from the Chrome Store](https://chrome.google.com/webstore/detail/hieejlcohhkjbpiihgphcnaaiehphike)
