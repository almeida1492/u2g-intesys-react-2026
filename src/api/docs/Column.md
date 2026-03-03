
# Column


## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`position` | number
`cards` | [Array&lt;Card&gt;](Card.md)
`projectId` | number

## Example

```typescript
import type { Column } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "position": null,
  "cards": null,
  "projectId": null,
} satisfies Column

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Column
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


