[shonad](../README.md) / [Exports](../modules.md) / [either](../modules/either.md) / Right

# Class: Right<B\>

[either](../modules/either.md).Right

## Type parameters

| Name |
| :------ |
| `B` |

## Hierarchy

- [`Either`](either.Either.md)<`any`, `B`\>

  ↳ **`Right`**

## Table of contents

### Constructors

- [constructor](either.Right.md#constructor)

### Properties

- [isLeft](either.Right.md#isleft)
- [isRight](either.Right.md#isright)
- [val](either.Right.md#val)
- [apply](either.Right.md#apply)
- [bind](either.Right.md#bind)
- [fmap](either.Right.md#fmap)

### Methods

- [apply](either.Right.md#apply-1)
- [bind](either.Right.md#bind-1)
- [equals](either.Right.md#equals)
- [fmap](either.Right.md#fmap-1)
- [unwrap](either.Right.md#unwrap)
- [pure](either.Right.md#pure)

## Constructors

### constructor

• **new Right**<`B`\>(`val`)

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Inherited from

[Either](either.Either.md).[constructor](either.Either.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/37e0549/src/base/Typeclass.ts#L4)

## Properties

### isLeft

• **isLeft**: (`a?`: `any`) => `boolean`

#### Type declaration

▸ (`a?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

##### Returns

`boolean`

#### Defined in

[src/data/Either.ts:30](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Either.ts#L30)

___

### isRight

• **isRight**: (`a?`: `any`) => `boolean`

#### Type declaration

▸ (`a?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

##### Returns

`boolean`

#### Defined in

[src/data/Either.ts:31](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Either.ts#L31)

___

### val

• **val**: `any`

#### Inherited from

[Either](either.Either.md).[val](either.Either.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/37e0549/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/applicative.md#staticapplyfn)<[`Monad`](monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Either](either.Either.md).[apply](either.Either.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/37e0549/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](monad.Monad.md)<`any`\>) => [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Either](either.Either.md).[bind](either.Either.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/37e0549/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Inherited from

[Either](either.Either.md).[fmap](either.Either.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/37e0549/src/control/Functor.ts#L5)

## Methods

### apply

▸ **apply**(`ma`): [`Either`](either.Either.md)<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ma` | [`Either`](either.Either.md)<`any`, `any`\> |

#### Returns

[`Either`](either.Either.md)<`any`, `any`\>

#### Overrides

Either.apply

#### Defined in

[src/data/Either.ts:35](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Either.ts#L35)

___

### bind

▸ **bind**<`C`\>(`f`): [`Either`](either.Either.md)<`any`, `C`\>

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `B`) => [`Either`](either.Either.md)<`any`, `C`\> |

#### Returns

[`Either`](either.Either.md)<`any`, `C`\>

#### Overrides

Either.bind

#### Defined in

[src/data/Either.ts:40](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Either.ts#L40)

___

### equals

▸ **equals**(`b`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `B` |

#### Returns

`any`

#### Defined in

[src/data/Either.ts:43](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Either.ts#L43)

___

### fmap

▸ **fmap**<`C`\>(`f`): [`Either`](either.Either.md)<`any`, `C`\>

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `B`) => `C` |

#### Returns

[`Either`](either.Either.md)<`any`, `C`\>

#### Overrides

Either.fmap

#### Defined in

[src/data/Either.ts:33](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Either.ts#L33)

___

### unwrap

▸ **unwrap**(`fallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `B` |

#### Returns

`any`

#### Overrides

Either.unwrap

#### Defined in

[src/data/Either.ts:41](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Either.ts#L41)

___

### pure

▸ `Static` **pure**(`a`): [`Right`](either.Right.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Right`](either.Right.md)<`unknown`\>

#### Inherited from

[Either](either.Either.md).[pure](either.Either.md#pure)

#### Defined in

[src/data/Either.ts:8](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Either.ts#L8)
