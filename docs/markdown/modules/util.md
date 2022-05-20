[shonad](../README.md) / [Exports](../modules.md) / util

# Namespace: util

## Table of contents

### Functions

- [eq](util.md#eq)
- [eqBy](util.md#eqby)
- [isNil](util.md#isnil)
- [isObject](util.md#isobject)

## Functions

### eq

▸ **eq**<`A`\>(`a`): (`b`: `A`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`fn`

▸ (`b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `A` |

##### Returns

`boolean`

#### Defined in

[src/base/Util.ts:9](https://github.com/jonlaing/shonad/blob/54cf147/src/base/Util.ts#L9)

▸ **eq**<`A`\>(`a`, `b`): `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `A` |

#### Returns

`boolean`

#### Defined in

[src/base/Util.ts:9](https://github.com/jonlaing/shonad/blob/54cf147/src/base/Util.ts#L9)

___

### eqBy

▸ **eqBy**<`A`\>(`f`): (`a`: `A`, `b`: `A`) => `boolean`(`a`: `A`) => (`b`: `A`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<[`A`], `any`\> |

#### Returns

`fn`

▸ (`a`, `b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `A` |

##### Returns

`boolean`

▸ (`a`): (`b`: `A`) => `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

##### Returns

`fn`

▸ (`b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `A` |

##### Returns

`boolean`

#### Defined in

[src/base/Util.ts:21](https://github.com/jonlaing/shonad/blob/54cf147/src/base/Util.ts#L21)

▸ **eqBy**<`A`\>(`f`, `a`): (`b`: `A`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<[`A`], `any`\> |
| `a` | `A` |

#### Returns

`fn`

▸ (`b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `A` |

##### Returns

`boolean`

#### Defined in

[src/base/Util.ts:21](https://github.com/jonlaing/shonad/blob/54cf147/src/base/Util.ts#L21)

▸ **eqBy**<`A`\>(`f`, `a`, `b`): `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<[`A`], `any`\> |
| `a` | `A` |
| `b` | `A` |

#### Returns

`boolean`

#### Defined in

[src/base/Util.ts:21](https://github.com/jonlaing/shonad/blob/54cf147/src/base/Util.ts#L21)

___

### isNil

▸ **isNil**(`a`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`boolean`

#### Defined in

[src/base/Util.ts:4](https://github.com/jonlaing/shonad/blob/54cf147/src/base/Util.ts#L4)

___

### isObject

▸ **isObject**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`boolean`

#### Defined in

[src/base/Util.ts:25](https://github.com/jonlaing/shonad/blob/54cf147/src/base/Util.ts#L25)
