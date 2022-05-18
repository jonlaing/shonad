[shonad](../README.md) / [Exports](../modules.md) / [data](../modules/data.md) / [either](../modules/data.either.md) / Right

# Class: Right<B\>

[data](../modules/data.md).[either](../modules/data.either.md).Right

## Type parameters

| Name |
| :------ |
| `B` |

## Hierarchy

- [`Either`](data.either.Either.md)<`any`, `B`\>

  ↳ **`Right`**

## Table of contents

### Constructors

- [constructor](data.either.Right.md#constructor)

### Properties

- [isLeft](data.either.Right.md#isleft)
- [isRight](data.either.Right.md#isright)
- [val](data.either.Right.md#val)
- [apply](data.either.Right.md#apply)
- [bind](data.either.Right.md#bind)
- [fmap](data.either.Right.md#fmap)

### Methods

- [apply](data.either.Right.md#apply-1)
- [bind](data.either.Right.md#bind-1)
- [equals](data.either.Right.md#equals)
- [fmap](data.either.Right.md#fmap-1)
- [unwrap](data.either.Right.md#unwrap)
- [pure](data.either.Right.md#pure)

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

[Either](data.either.Either.md).[constructor](data.either.Either.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/0ae3fab/src/base/Typeclass.ts#L4)

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

[src/data/Either.ts:26](https://github.com/jonlaing/shonad/blob/0ae3fab/src/data/Either.ts#L26)

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

[src/data/Either.ts:27](https://github.com/jonlaing/shonad/blob/0ae3fab/src/data/Either.ts#L27)

___

### val

• **val**: `any`

#### Inherited from

[Either](data.either.Either.md).[val](data.either.Either.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/0ae3fab/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/control.applicative.md#staticapplyfn)<[`Monad`](control.monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](control.monad.Monad.md)<`any`\>\>

#### Inherited from

[Either](data.either.Either.md).[apply](data.either.Either.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/0ae3fab/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](control.monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](control.monad.Monad.md)<`any`\>) => [`Monad`](control.monad.Monad.md)<`any`\>\>

#### Inherited from

[Either](data.either.Either.md).[bind](data.either.Either.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/0ae3fab/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](control.functor.Functor.md)<`A`\>) => [`Functor`](control.functor.Functor.md)<`any`\>\>

#### Inherited from

[Either](data.either.Either.md).[fmap](data.either.Either.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/0ae3fab/src/control/Functor.ts#L5)

## Methods

### apply

▸ **apply**(`ma`): [`Either`](data.either.Either.md)<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ma` | [`Either`](data.either.Either.md)<`any`, `any`\> |

#### Returns

[`Either`](data.either.Either.md)<`any`, `any`\>

#### Overrides

Either.apply

#### Defined in

[src/data/Either.ts:31](https://github.com/jonlaing/shonad/blob/0ae3fab/src/data/Either.ts#L31)

___

### bind

▸ **bind**<`C`\>(`f`): [`Either`](data.either.Either.md)<`any`, `C`\>

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `B`) => [`Either`](data.either.Either.md)<`any`, `C`\> |

#### Returns

[`Either`](data.either.Either.md)<`any`, `C`\>

#### Overrides

Either.bind

#### Defined in

[src/data/Either.ts:36](https://github.com/jonlaing/shonad/blob/0ae3fab/src/data/Either.ts#L36)

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

[src/data/Either.ts:39](https://github.com/jonlaing/shonad/blob/0ae3fab/src/data/Either.ts#L39)

___

### fmap

▸ **fmap**<`C`\>(`f`): [`Either`](data.either.Either.md)<`any`, `C`\>

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `B`) => `C` |

#### Returns

[`Either`](data.either.Either.md)<`any`, `C`\>

#### Overrides

Either.fmap

#### Defined in

[src/data/Either.ts:29](https://github.com/jonlaing/shonad/blob/0ae3fab/src/data/Either.ts#L29)

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

[src/data/Either.ts:37](https://github.com/jonlaing/shonad/blob/0ae3fab/src/data/Either.ts#L37)

___

### pure

▸ `Static` **pure**(`a`): [`Right`](data.either.Right.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Right`](data.either.Right.md)<`unknown`\>

#### Inherited from

[Either](data.either.Either.md).[pure](data.either.Either.md#pure)

#### Defined in

[src/data/Either.ts:8](https://github.com/jonlaing/shonad/blob/0ae3fab/src/data/Either.ts#L8)
