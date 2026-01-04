# XML2CML

XML2CML is a lightweight Node.js module to convert between XML and CML (Customizable Markup Language). It allows you to effortlessly transform standard XML documents into a customizable, simplified markup format and back.


---

# Features

Convert XML to CML with version tagging

Convert CML back to standard XML

Custom closing tag syntax (↙tag>) in CML

Supports merging multiple XML or CML strings

Lightweight and dependency-free

Easy to integrate in Node.js projects



---

# Installation

npm install xml2cml


---

Usage
```
import { xmlToCml, cmlToXml, mergeContents } from 'xml2cml';

const xml = `<?xml version="1.0"?><root><child>Hello World</child></root>`;
const version = '1.0.0';

// Convert XML to CML
const cml = xmlToCml(xml, version);
console.log('CML:', cml);

// Convert CML back to XML
const xmlBack = cmlToXml(cml);
console.log('XML:', xmlBack);

// Merge multiple XML or CML strings
const merged = mergeContents([xml, xml]);
console.log('Merged:', merged);
```

---

API

``xmlToCml(xmlStr: string, version: string, trim?: boolean): string``

Converts XML string to CML format.

``xmlStr``: Input XML string

``version``: Version string for CML header (required)

``trim``: Optional boolean to trim whitespace (default: true)

Returns: CML string


``mergeContents(inputs: string[]): string``

Merges multiple XML or CML strings into one.

``inputs``: Array of XML or CML strings

Returns: Single merged string



---

License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.


---

Author

Shanveer Singh
