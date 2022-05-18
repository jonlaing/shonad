[shonad](../README.md) / [Exports](../modules.md) / [data](data.md) / constFunctor

# Namespace: constFunctor

[data](data.md).constFunctor

## Table of contents

### Classes

- [Const](../classes/data.constFunctor.Const.md)

### Functions

- [fmap](data.constFunctor.md#fmap)
- [makeConst](data.constFunctor.md#makeconst)
- [unwrap](data.constFunctor.md#unwrap)

## Functions

### fmap

▸ **fmap**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [f: x \| Function, x: x \| Functor<unknown\>] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [f: Function, x: Functor<unknown\>]\> |
| `R` | extends `unknown` = [`Functor`](../classes/control.functor.Functor.md)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [f: x \| Function, x: x \| Functor<unknown\>] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/data/Const.ts:9](https://github.com/jonlaing/shonad/blob/c6c0ed4/src/data/Const.ts#L9)

___

### makeConst

▸ **makeConst**<`A`\>(`a`): [`Const`](../classes/data.constFunctor.Const.md)<`A`, `unknown`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

[`Const`](../classes/data.constFunctor.Const.md)<`A`, `unknown`\>

#### Defined in

[src/data/Const.ts:17](https://github.com/jonlaing/shonad/blob/c6c0ed4/src/data/Const.ts#L17)

___

### unwrap

▸ **unwrap**<`A`\>(`fallback`): (`c`: [`Const`](../classes/data.constFunctor.Const.md)<`A`, `any`\>) => `A`

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
| `c` | [`Const`](../classes/data.constFunctor.Const.md)<`A`, `any`\> |

##### Returns

`A`

#### Defined in

[src/data/Const.ts:13](https://github.com/jonlaing/shonad/blob/c6c0ed4/src/data/Const.ts#L13)

▸ **unwrap**<`A`\>(`fallback`, `c`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |
| `c` | [`Const`](../classes/data.constFunctor.Const.md)<`A`, `any`\> |

#### Returns

`A`

#### Defined in

[src/data/Const.ts:13](https://github.com/jonlaing/shonad/blob/c6c0ed4/src/data/Const.ts#L13)
