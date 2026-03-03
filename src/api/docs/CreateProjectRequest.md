
# CreateProjectRequest


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`members` | Array&lt;number&gt;
`columns` | [Array&lt;CreateProjectRequestColumnsInner&gt;](CreateProjectRequestColumnsInner.md)

## Example

```typescript
import type { CreateProjectRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "description": null,
  "members": null,
  "columns": null,
} satisfies CreateProjectRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateProjectRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


