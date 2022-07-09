[shonad](../README.md) / [Exports](../modules.md) / identity

# Namespace: identity

## Table of contents

### Classes

- [Identity](../classes/identity.Identity.md)

### Functions

- [makeId](identity.md#makeid)
- [unwrap](identity.md#unwrap)

## Functions

### makeId

▸ **makeId**<`A`\>(`a`): [`Identity`](../classes/identity.Identity.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

[`Identity`](../classes/identity.Identity.md)<`A`\>

#### Defined in

[src/data/Identity.ts:14](https://github.com/jonlaing/shonad/blob/299d147/src/data/Identity.ts#L14)

___

### unwrap

▸ **unwrap**<`A`\>(`fallback`): (`c`: [`Identity`](../classes/identity.Identity.md)<`A`\>) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |

#### Returns

`fn`

▸ (`c`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Identity`](../classes/identity.Identity.md)<`A`\> |

##### Returns

`A`

#### Defined in

[src/data/Identity.ts:11](https://github.com/jonlaing/shonad/blob/299d147/src/data/Identity.ts#L11)

▸ **unwrap**<`A`\>(`fallback`, `c`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |
| `c` | [`Identity`](../classes/identity.Identity.md)<`A`\> |

#### Returns

`A`

#### Defined in

[src/data/Identity.ts:11](https://github.com/jonlaing/shonad/blob/299d147/src/data/Identity.ts#L11)
