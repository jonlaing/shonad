[shonad](../README.md) / [Exports](../modules.md) / monad

# Namespace: monad

## Table of contents

### Classes

- [Monad](../classes/monad.Monad.md)

### Interfaces

- [IMonad](../interfaces/monad.IMonad.md)

### Type aliases

- [DoFuncReturn](monad.md#dofuncreturn)

### Functions

- [makeDo](monad.md#makedo)
- [obeysMonadLaws](monad.md#obeysmonadlaws)

## Type aliases

### DoFuncReturn

Ƭ **DoFuncReturn**<`T`\>: `Generator`<`T`, `any`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/control/Monad.ts:66](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Monad.ts#L66)

## Functions

### makeDo

▸ **makeDo**<`T`\>(`pure`, `bind`): (`f`: (`fix`: <A\>(`val`: `any`) => `A`) => [`DoFuncReturn`](monad.md#dofuncreturn)<`T`\>) => `T`

Makes type spcefic `do` notation for a Monad.

**`remarks`** In the final do, the generator function takes a parameter that "fixes" the
type of the `yield`. Without it, the types don't work properly, because yield defaults
to the type of the Monad, rather than the containing type.

**`example`**

export const _do = makeDo<Maybe<any>>(pure, bind);

const ma = maybe.just(1)
const mb = maybe.just(2)

_do(function* (_) {
   const a: number = _(yield ma) // forces ma to be a number
   const b: number = _(yield mb) // force mb to be a number

   return a + b
}) // maybe.just(3)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Monad`](../classes/monad.Monad.md)<`any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pure` | [`Function`](func.md#function)<`any`, `T`\> | the `pure` function from the Applicative interface. |
| `bind` | `Function`<[`T`, [`Function`](func.md#function)<`any`, `T`\>], `T`\> | the `bind` function from the Monad interface |

#### Returns

`fn`

`do` notation function that takes a `fix` param to cast Monads into their containing type (See example)

▸ (`f`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`fix`: <A\>(`val`: `any`) => `A`) => [`DoFuncReturn`](monad.md#dofuncreturn)<`T`\> |

##### Returns

`T`

#### Defined in

[src/control/Monad.ts:99](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Monad.ts#L99)

___

### obeysMonadLaws

▸ **obeysMonadLaws**<`T`\>(`mx`, `g`, `h`): `boolean`

Utility function meant to be used in tests to ensure your Monad obeys the monad laws

**`remarks`**

Since all Monads are Functors and Applicatives, you should also use
[obeysFunctorLaws](functor.md#obeysfunctorlaws) and [obeysApplicativeLaws](applicative.md#obeysapplicativelaws) in your tests.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Monad`](../classes/monad.Monad.md)<`any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mx` | `T` | M x |
| `g` | (`a`: `any`) => `T` | x => Monad y |
| `h` | (`a`: `any`) => `T` | y => Monad z |

#### Returns

`boolean`

`true` or `false`

#### Defined in

[src/control/Monad.ts:129](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Monad.ts#L129)
