
# CreateCardRequest


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`assignedToId` | number
`columnId` | number

## Example

```typescript
import type { CreateCardRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "description": null,
  "assignedToId": null,
  "columnId": null,
} satisfies CreateCardRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCardRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


