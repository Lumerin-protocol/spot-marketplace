//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BTCPriceOracleMock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const btcPriceOracleMockAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint80', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'price', internalType: 'int256', type: 'int256' },
      { name: 'ndecimals', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'setPrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CloneFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const cloneFactoryAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedCall' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_validator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'clonefactoryContractPurchased',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_pubkey',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'contractCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_isDeleted',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'contractDeleteUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'contractHardDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'purchaseInfoUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_validatorFeeRateScaled',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'validatorFeeRateUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VALIDATOR_FEE_DECIMALS',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseImplementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_index', internalType: 'uint256', type: 'uint256' },
      { name: '_address', internalType: 'address', type: 'address' },
    ],
    name: 'contractHardDelete',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getContractDurationInterval',
    outputs: [
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getContractList',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_offset', internalType: 'uint256', type: 'uint256' },
      { name: '_limit', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'getSellers',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'hashrateOracle',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_baseImplementation', internalType: 'address', type: 'address' },
      { name: '_hashrateOracle', internalType: 'address', type: 'address' },
      { name: '_paymentToken', internalType: 'address', type: 'address' },
      { name: '_feeToken', internalType: 'address', type: 'address' },
      {
        name: '_validatorFeeRateScaled',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: '_minSellerStake', internalType: 'uint256', type: 'uint256' },
      { name: '_minContractDuration', internalType: 'uint32', type: 'uint32' },
      { name: '_maxContractDuration', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minSellerStake',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paymentToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'rentalContracts',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_seller', internalType: 'address', type: 'address' }],
    name: 'sellerByAddress',
    outputs: [
      {
        name: 'seller',
        internalType: 'struct CloneFactory.Seller',
        type: 'tuple',
        components: [
          { name: 'stake', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'isActive', internalType: 'bool', type: 'bool' },
      { name: 'isRegistered', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellerDeregister',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_stake', internalType: 'uint256', type: 'uint256' }],
    name: 'sellerRegister',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_min', internalType: 'uint32', type: 'uint32' },
      { name: '_max', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'setContractDurationInterval',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_contractAddresses',
        internalType: 'address[]',
        type: 'address[]',
      },
      { name: '_isDeleted', internalType: 'bool', type: 'bool' },
    ],
    name: 'setContractsDeleted',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_profitTarget', internalType: 'int8', type: 'int8' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '_pubKey', internalType: 'string', type: 'string' },
    ],
    name: 'setCreateNewRentalContractV2',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_hashrateOracle', internalType: 'address', type: 'address' },
    ],
    name: 'setHashrateOracle',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_minSellerStake', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMinSellerStake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_contractAddress', internalType: 'address', type: 'address' },
      { name: '_validatorAddress', internalType: 'address', type: 'address' },
      { name: '_encrValidatorURL', internalType: 'string', type: 'string' },
      { name: '_encrDestURL', internalType: 'string', type: 'string' },
      { name: 'termsVersion', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'setPurchaseRentalContractV2',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_contractAddress', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_profitTarget', internalType: 'int8', type: 'int8' },
    ],
    name: 'setUpdateContractInformationV2',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_validatorFeeRateScaled',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setValidatorFeeRate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'validatorFeeRateScaled',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CloneFactoryV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const cloneFactoryV2Abi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedCall' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_validator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'clonefactoryContractPurchased',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_pubkey',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'contractCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_seller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'profitTarget',
        internalType: 'int8',
        type: 'int8',
        indexed: false,
      },
      {
        name: 'length',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'speed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'contractCreatedV2',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_isDeleted',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'contractDeleteUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'contractHardDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_minSellerStake',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'minSellerStakeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'purchaseInfoUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_seller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'sellerDeregistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_seller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_stake',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'sellerRegisteredUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_validatorFeeRateScaled',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'validatorFeeRateUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VALIDATOR_FEE_DECIMALS',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseImplementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_index', internalType: 'uint256', type: 'uint256' },
      { name: '_address', internalType: 'address', type: 'address' },
    ],
    name: 'contractHardDelete',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getContractDurationInterval',
    outputs: [
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getContractList',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDefaultBuyer',
    outputs: [
      {
        name: '',
        internalType: 'struct CloneFactoryV2.BuyerInfo',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'encrValidatorURL', internalType: 'string', type: 'string' },
          { name: 'encrDestURL', internalType: 'string', type: 'string' },
        ],
      },
      { name: '', internalType: 'int8', type: 'int8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_seller', internalType: 'address', type: 'address' },
      { name: '_offset', internalType: 'uint256', type: 'uint256' },
      { name: '_limit', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'getSellerContracts',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_offset', internalType: 'uint256', type: 'uint256' },
      { name: '_limit', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'getSellers',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'hashrateOracle',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_baseImplementation', internalType: 'address', type: 'address' },
      { name: '_hashrateOracle', internalType: 'address', type: 'address' },
      { name: '_paymentToken', internalType: 'address', type: 'address' },
      { name: '_feeToken', internalType: 'address', type: 'address' },
      {
        name: '_validatorFeeRateScaled',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: '_minSellerStake', internalType: 'uint256', type: 'uint256' },
      { name: '_minContractDuration', internalType: 'uint32', type: 'uint32' },
      { name: '_maxContractDuration', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minSellerStake',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paymentToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_contractAddress', internalType: 'address', type: 'address' },
    ],
    name: 'purchaseAsDefaultBuyer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'rentalContracts',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_seller', internalType: 'address', type: 'address' }],
    name: 'sellerByAddress',
    outputs: [
      {
        name: 'seller',
        internalType: 'struct CloneFactoryV2.Seller',
        type: 'tuple',
        components: [
          { name: 'stake', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'isActive', internalType: 'bool', type: 'bool' },
      { name: 'isRegistered', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellerDeregister',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_stake', internalType: 'uint256', type: 'uint256' }],
    name: 'sellerRegister',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_min', internalType: 'uint32', type: 'uint32' },
      { name: '_max', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'setContractDurationInterval',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_contractAddresses',
        internalType: 'address[]',
        type: 'address[]',
      },
      { name: '_isDeleted', internalType: 'bool', type: 'bool' },
    ],
    name: 'setContractsDeleted',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_profitTarget', internalType: 'int8', type: 'int8' },
      { name: '_pubKey', internalType: 'string', type: 'string' },
    ],
    name: 'setCreateNewRentalContractV2',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_buyerAddress', internalType: 'address', type: 'address' },
      { name: '_profitTarget', internalType: 'int8', type: 'int8' },
      { name: '_encrValidatorURL', internalType: 'string', type: 'string' },
      { name: '_encrDestURL', internalType: 'string', type: 'string' },
    ],
    name: 'setDefaultBuyer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_hashrateOracle', internalType: 'address', type: 'address' },
    ],
    name: 'setHashrateOracle',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_minSellerStake', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMinSellerStake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_contractAddress', internalType: 'address', type: 'address' },
      { name: '_validatorAddress', internalType: 'address', type: 'address' },
      { name: '_encrValidatorURL', internalType: 'string', type: 'string' },
      { name: '_encrDestURL', internalType: 'string', type: 'string' },
      { name: 'termsVersion', internalType: 'uint32', type: 'uint32' },
      { name: '_isResellable', internalType: 'bool', type: 'bool' },
      { name: '_resellToDefaultBuyer', internalType: 'bool', type: 'bool' },
      { name: '_resellPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setPurchaseRentalContractV2',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_contractAddress', internalType: 'address', type: 'address' },
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setUpdateContractInformationV2',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_validatorFeeRateScaled',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setValidatorFeeRate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'validatorFeeRateScaled',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EC
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ecAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'x1', internalType: 'uint256', type: 'uint256' },
      { name: 'y1', internalType: 'uint256', type: 'uint256' },
      { name: 'z1', internalType: 'uint256', type: 'uint256' },
      { name: 'x2', internalType: 'uint256', type: 'uint256' },
      { name: 'y2', internalType: 'uint256', type: 'uint256' },
      { name: 'z2', internalType: 'uint256', type: 'uint256' },
    ],
    name: '_ecAdd',
    outputs: [
      { name: 'x3', internalType: 'uint256', type: 'uint256' },
      { name: 'y3', internalType: 'uint256', type: 'uint256' },
      { name: 'z3', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'x1', internalType: 'uint256', type: 'uint256' },
      { name: 'y1', internalType: 'uint256', type: 'uint256' },
      { name: 'z1', internalType: 'uint256', type: 'uint256' },
    ],
    name: '_ecDouble',
    outputs: [
      { name: 'x3', internalType: 'uint256', type: 'uint256' },
      { name: 'y3', internalType: 'uint256', type: 'uint256' },
      { name: 'z3', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'd', internalType: 'uint256', type: 'uint256' },
      { name: 'x1', internalType: 'uint256', type: 'uint256' },
      { name: 'y1', internalType: 'uint256', type: 'uint256' },
      { name: 'z1', internalType: 'uint256', type: 'uint256' },
    ],
    name: '_ecMul',
    outputs: [
      { name: 'x3', internalType: 'uint256', type: 'uint256' },
      { name: 'y3', internalType: 'uint256', type: 'uint256' },
      { name: 'z3', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'val', internalType: 'uint256', type: 'uint256' }],
    name: '_inverse',
    outputs: [{ name: 'invVal', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'x1', internalType: 'uint256', type: 'uint256' },
      { name: 'z1', internalType: 'uint256', type: 'uint256' },
      { name: 'x2', internalType: 'uint256', type: 'uint256' },
      { name: 'z2', internalType: 'uint256', type: 'uint256' },
    ],
    name: '_jAdd',
    outputs: [
      { name: 'x3', internalType: 'uint256', type: 'uint256' },
      { name: 'z3', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'x1', internalType: 'uint256', type: 'uint256' },
      { name: 'z1', internalType: 'uint256', type: 'uint256' },
      { name: 'x2', internalType: 'uint256', type: 'uint256' },
      { name: 'z2', internalType: 'uint256', type: 'uint256' },
    ],
    name: '_jDiv',
    outputs: [
      { name: 'x3', internalType: 'uint256', type: 'uint256' },
      { name: 'z3', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'x1', internalType: 'uint256', type: 'uint256' },
      { name: 'z1', internalType: 'uint256', type: 'uint256' },
      { name: 'x2', internalType: 'uint256', type: 'uint256' },
      { name: 'z2', internalType: 'uint256', type: 'uint256' },
    ],
    name: '_jMul',
    outputs: [
      { name: 'x3', internalType: 'uint256', type: 'uint256' },
      { name: 'z3', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'x1', internalType: 'uint256', type: 'uint256' },
      { name: 'z1', internalType: 'uint256', type: 'uint256' },
      { name: 'x2', internalType: 'uint256', type: 'uint256' },
      { name: 'z2', internalType: 'uint256', type: 'uint256' },
    ],
    name: '_jSub',
    outputs: [
      { name: 'x3', internalType: 'uint256', type: 'uint256' },
      { name: 'z3', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'a',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'b',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'x', internalType: 'uint256', type: 'uint256' },
      { name: 'y', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'compressPoint',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privKey', internalType: 'uint256', type: 'uint256' },
      { name: 'pubX', internalType: 'uint256', type: 'uint256' },
      { name: 'pubY', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deriveKey',
    outputs: [
      { name: 'qx', internalType: 'uint256', type: 'uint256' },
      { name: 'qy', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'x1', internalType: 'uint256', type: 'uint256' },
      { name: 'y1', internalType: 'uint256', type: 'uint256' },
      { name: 'x2', internalType: 'uint256', type: 'uint256' },
      { name: 'y2', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ecadd',
    outputs: [
      { name: 'x3', internalType: 'uint256', type: 'uint256' },
      { name: 'y3', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'x1', internalType: 'uint256', type: 'uint256' },
      { name: 'y1', internalType: 'uint256', type: 'uint256' },
      { name: 'scalar', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ecmul',
    outputs: [
      { name: 'x2', internalType: 'uint256', type: 'uint256' },
      { name: 'y2', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'gx',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'gy',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'base', internalType: 'uint256', type: 'uint256' },
      { name: 'exponent', internalType: 'uint256', type: 'uint256' },
      { name: 'modulus', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'modExp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'n',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'privKey', internalType: 'uint256', type: 'uint256' }],
    name: 'publicKey',
    outputs: [
      { name: 'qx', internalType: 'uint256', type: 'uint256' },
      { name: 'qy', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'compressed', internalType: 'bytes', type: 'bytes' }],
    name: 'recoverY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Faucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const faucetAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_lmr', internalType: 'address', type: 'address' },
      { name: '_dailyMaxLmr', internalType: 'uint256', type: 'uint256' },
      { name: '_lmrPayout', internalType: 'uint256', type: 'uint256' },
      { name: '_ethPayout', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_address', internalType: 'address', type: 'address' },
      { name: '_ipAddress', internalType: 'string', type: 'string' },
    ],
    name: 'canClaimTokens',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cooldownPeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cooldownStartingTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentLMRTokenDistribution',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'emptyGeth',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ethPayout',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lmrPayout',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lmrTokenDistributionMax',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resetDistributedTodayLmr',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setTransferLumerin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_ethPayout', internalType: 'uint256', type: 'uint256' }],
    name: 'setUpdateEthPayout',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_lmrPayout', internalType: 'uint256', type: 'uint256' }],
    name: 'setUpdateLmrPayout',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_lmr', internalType: 'address', type: 'address' }],
    name: 'setUpdateLumerin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newOwner', internalType: 'address', type: 'address' }],
    name: 'setUpdateOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_dailyMaxLmr', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setUpdatedailyMaxLmr',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_claiment', internalType: 'address', type: 'address' },
      { name: '_ipAddress', internalType: 'string', type: 'string' },
    ],
    name: 'supervisedClaim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticallEmbedded
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticallEmbeddedAbi = [
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const implementationAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_cloneFactory', internalType: 'address', type: 'address' },
      { name: '_hashrateOracle', internalType: 'address', type: 'address' },
      { name: '_paymentToken', internalType: 'address', type: 'address' },
      { name: '_feeToken', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_reason',
        internalType: 'enum Implementation.CloseReason',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'closedEarly',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'contractPurchased',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newValidatorURL',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'newDestURL',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'destinationUpdated',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'fundsClaimed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_address',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'purchaseInfoUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VALIDATOR_FEE_DECIMALS',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buyer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimFunds',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimFundsValidator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cloneFactory',
    outputs: [
      { name: '', internalType: 'contract CloneFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'reason',
        internalType: 'enum Implementation.CloseReason',
        type: 'uint8',
      },
    ],
    name: 'closeEarly',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractState',
    outputs: [
      {
        name: '',
        internalType: 'enum Implementation.ContractState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'encrDestURL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'encrValidatorURL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'futureTerms',
    outputs: [
      { name: '_price', internalType: 'uint256', type: 'uint256' },
      { name: '_fee', internalType: 'uint256', type: 'uint256' },
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_version', internalType: 'uint32', type: 'uint32' },
      { name: '_profitTarget', internalType: 'int8', type: 'int8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_offset', internalType: 'uint256', type: 'uint256' },
      { name: '_limit', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'getHistory',
    outputs: [
      {
        name: '',
        internalType: 'struct Implementation.HistoryEntry[]',
        type: 'tuple[]',
        components: [
          { name: '_purchaseTime', internalType: 'uint256', type: 'uint256' },
          { name: '_endTime', internalType: 'uint256', type: 'uint256' },
          { name: '_price', internalType: 'uint256', type: 'uint256' },
          { name: '_fee', internalType: 'uint256', type: 'uint256' },
          { name: '_speed', internalType: 'uint256', type: 'uint256' },
          { name: '_length', internalType: 'uint256', type: 'uint256' },
          { name: '_buyer', internalType: 'address', type: 'address' },
          { name: '_validator', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPublicVariablesV2',
    outputs: [
      {
        name: '_state',
        internalType: 'enum Implementation.ContractState',
        type: 'uint8',
      },
      {
        name: '_terms',
        internalType: 'struct Implementation.Terms',
        type: 'tuple',
        components: [
          { name: '_price', internalType: 'uint256', type: 'uint256' },
          { name: '_fee', internalType: 'uint256', type: 'uint256' },
          { name: '_speed', internalType: 'uint256', type: 'uint256' },
          { name: '_length', internalType: 'uint256', type: 'uint256' },
          { name: '_version', internalType: 'uint32', type: 'uint32' },
          { name: '_profitTarget', internalType: 'int8', type: 'int8' },
        ],
      },
      {
        name: '_startingBlockTimestamp',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: '_buyer', internalType: 'address', type: 'address' },
      { name: '_seller', internalType: 'address', type: 'address' },
      { name: '_encryptedPoolData', internalType: 'string', type: 'string' },
      { name: '_isDeleted', internalType: 'bool', type: 'bool' },
      { name: '_balance', internalType: 'uint256', type: 'uint256' },
      { name: '_hasFutureTerms', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStats',
    outputs: [
      { name: '_successCount', internalType: 'uint256', type: 'uint256' },
      { name: '_failCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'hashrateOracle',
    outputs: [
      { name: '', internalType: 'contract HashrateOracle', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'history',
    outputs: [
      { name: '_purchaseTime', internalType: 'uint256', type: 'uint256' },
      { name: '_endTime', internalType: 'uint256', type: 'uint256' },
      { name: '_price', internalType: 'uint256', type: 'uint256' },
      { name: '_fee', internalType: 'uint256', type: 'uint256' },
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_buyer', internalType: 'address', type: 'address' },
      { name: '_validator', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_seller', internalType: 'address', type: 'address' },
      { name: '_pubKey', internalType: 'string', type: 'string' },
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_profitTarget', internalType: 'int8', type: 'int8' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isDeleted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paymentToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'priceAndFee',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pubKey',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'seller',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_isDeleted', internalType: 'bool', type: 'bool' }],
    name: 'setContractDeleted',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_encrValidatorURL', internalType: 'string', type: 'string' },
      { name: '_encrDestURL', internalType: 'string', type: 'string' },
    ],
    name: 'setDestination',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_encrValidatorURL', internalType: 'string', type: 'string' },
      { name: '_encrDestURL', internalType: 'string', type: 'string' },
      { name: '_price', internalType: 'uint256', type: 'uint256' },
      { name: '_buyer', internalType: 'address', type: 'address' },
      { name: '_validator', internalType: 'address', type: 'address' },
      {
        name: '_validatorFeeRateScaled',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setPurchaseContract',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_profitTarget', internalType: 'int8', type: 'int8' },
    ],
    name: 'setUpdatePurchaseInformation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startingBlockTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'terms',
    outputs: [
      { name: '_price', internalType: 'uint256', type: 'uint256' },
      { name: '_fee', internalType: 'uint256', type: 'uint256' },
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_version', internalType: 'uint32', type: 'uint32' },
      { name: '_profitTarget', internalType: 'int8', type: 'int8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'validator',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'validatorFeeRateScaled',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ImplementationV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const implementationV2Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_cloneFactory', internalType: 'address', type: 'address' },
      { name: '_hashrateOracle', internalType: 'address', type: 'address' },
      { name: '_paymentToken', internalType: 'address', type: 'address' },
      { name: '_feeToken', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_validator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_seller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_reason',
        internalType: 'enum ImplementationV2.CloseReason',
        type: 'uint8',
        indexed: false,
      },
      {
        name: '_resellFlags',
        internalType: 'struct ResellFlags',
        type: 'tuple',
        components: [
          { name: 'isResellable', internalType: 'bool', type: 'bool' },
          {
            name: 'isResellToDefaultBuyer',
            internalType: 'bool',
            type: 'bool',
          },
        ],
        indexed: false,
      },
    ],
    name: 'contractClosedEarly',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_validator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_seller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_price',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_fee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_resellPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_resellFlags',
        internalType: 'struct ResellFlags',
        type: 'tuple',
        components: [
          { name: 'isResellable', internalType: 'bool', type: 'bool' },
          {
            name: 'isResellToDefaultBuyer',
            internalType: 'bool',
            type: 'bool',
          },
        ],
        indexed: false,
      },
    ],
    name: 'contractPurchased',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_speed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_length',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_version',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'contractTermsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newValidatorURL',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'newDestURL',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'destinationUpdated',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'fundsClaimed' },
  {
    type: 'function',
    inputs: [],
    name: 'VALIDATOR_FEE_DECIMALS',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimFunds',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cloneFactory',
    outputs: [
      { name: '', internalType: 'contract CloneFactoryV2', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'reason',
        internalType: 'enum ImplementationV2.CloseReason',
        type: 'uint8',
      },
    ],
    name: 'closeEarly',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractState',
    outputs: [
      {
        name: '',
        internalType: 'enum ImplementationV2.ContractState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failCount',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'futureTerms',
    outputs: [
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_version', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLatestResell',
    outputs: [
      {
        name: '',
        internalType: 'struct ImplementationV2.ResellTerms',
        type: 'tuple',
        components: [
          { name: '_buyer', internalType: 'address', type: 'address' },
          { name: '_validator', internalType: 'address', type: 'address' },
          { name: '_price', internalType: 'uint256', type: 'uint256' },
          { name: '_fee', internalType: 'uint256', type: 'uint256' },
          { name: '_startTime', internalType: 'uint256', type: 'uint256' },
          { name: '_encrDestURL', internalType: 'string', type: 'string' },
          { name: '_encrValidatorURL', internalType: 'string', type: 'string' },
          {
            name: '_lastSettlementTime',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: '_seller', internalType: 'address', type: 'address' },
          { name: '_resellPrice', internalType: 'uint256', type: 'uint256' },
          { name: '_resellProfitTarget', internalType: 'int8', type: 'int8' },
          { name: '_isResellable', internalType: 'bool', type: 'bool' },
          {
            name: '_isResellToDefaultBuyer',
            internalType: 'bool',
            type: 'bool',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'hashrateOracle',
    outputs: [
      { name: '', internalType: 'contract HashrateOracle', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_seller', internalType: 'address', type: 'address' },
      { name: '_pubKey', internalType: 'string', type: 'string' },
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_profitTarget', internalType: 'int8', type: 'int8' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isDeleted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isReselling',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paymentToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'priceAndFee',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_profitTarget', internalType: 'int8', type: 'int8' }],
    name: 'priceV2',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pubKey',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'resellChain',
    outputs: [
      { name: '_buyer', internalType: 'address', type: 'address' },
      { name: '_validator', internalType: 'address', type: 'address' },
      { name: '_price', internalType: 'uint256', type: 'uint256' },
      { name: '_fee', internalType: 'uint256', type: 'uint256' },
      { name: '_startTime', internalType: 'uint256', type: 'uint256' },
      { name: '_encrDestURL', internalType: 'string', type: 'string' },
      { name: '_encrValidatorURL', internalType: 'string', type: 'string' },
      { name: '_lastSettlementTime', internalType: 'uint256', type: 'uint256' },
      { name: '_seller', internalType: 'address', type: 'address' },
      { name: '_resellPrice', internalType: 'uint256', type: 'uint256' },
      { name: '_resellProfitTarget', internalType: 'int8', type: 'int8' },
      { name: '_isResellable', internalType: 'bool', type: 'bool' },
      { name: '_isResellToDefaultBuyer', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'seller',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_isDeleted', internalType: 'bool', type: 'bool' }],
    name: 'setContractDeleted',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_encrValidatorURL', internalType: 'string', type: 'string' },
      { name: '_encrDestURL', internalType: 'string', type: 'string' },
    ],
    name: 'setDestination',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_encrValidatorURL', internalType: 'string', type: 'string' },
      { name: '_encrDestURL', internalType: 'string', type: 'string' },
      { name: '_price', internalType: 'uint256', type: 'uint256' },
      { name: '_fee', internalType: 'uint256', type: 'uint256' },
      { name: '_buyer', internalType: 'address', type: 'address' },
      { name: '_seller', internalType: 'address', type: 'address' },
      { name: '_validator', internalType: 'address', type: 'address' },
      {
        name: '_resellFlags',
        internalType: 'struct ResellFlags',
        type: 'tuple',
        components: [
          { name: 'isResellable', internalType: 'bool', type: 'bool' },
          {
            name: 'isResellToDefaultBuyer',
            internalType: 'bool',
            type: 'bool',
          },
        ],
      },
      { name: '_resellPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setPurchaseContract',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setTerms',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'successCount',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'terms',
    outputs: [
      { name: '_speed', internalType: 'uint256', type: 'uint256' },
      { name: '_length', internalType: 'uint256', type: 'uint256' },
      { name: '_version', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lumerin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lumerinAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LumerinToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lumerinTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Multicall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const multicall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct Multicall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct Multicall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct Multicall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct Multicall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct Multicall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct Multicall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct Multicall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct Multicall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct Multicall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct Multicall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct Multicall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDCMock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usdcMockAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ValidatorRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const validatorRegistryAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  { type: 'error', inputs: [], name: 'AlreadyComplained' },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedCall' },
  { type: 'error', inputs: [], name: 'HostTooLong' },
  { type: 'error', inputs: [], name: 'InsufficientStake' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
  { type: 'error', inputs: [], name: 'Unauthorized' },
  { type: 'error', inputs: [], name: 'ValidatorNotFound' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'complainer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ValidatorComplain',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ValidatorDeregistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ValidatorPunished',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'validator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ValidatorRegisteredUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'activeValidatorsLength',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'validator', internalType: 'address', type: 'address' }],
    name: 'forceUpdateActive',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'offset', internalType: 'uint256', type: 'uint256' },
      { name: 'limit', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'getActiveValidators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getValidator',
    outputs: [
      {
        name: '',
        internalType: 'struct ValidatorRegistry.Validator',
        type: 'tuple',
        components: [
          { name: 'stake', internalType: 'uint256', type: 'uint256' },
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'pubKeyYparity', internalType: 'bool', type: 'bool' },
          { name: 'lastComplainer', internalType: 'address', type: 'address' },
          { name: 'complains', internalType: 'uint8', type: 'uint8' },
          { name: 'host', internalType: 'string', type: 'string' },
          { name: 'pubKeyX', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getValidatorV2',
    outputs: [
      {
        name: 'validator',
        internalType: 'struct ValidatorRegistry.Validator',
        type: 'tuple',
        components: [
          { name: 'stake', internalType: 'uint256', type: 'uint256' },
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'pubKeyYparity', internalType: 'bool', type: 'bool' },
          { name: 'lastComplainer', internalType: 'address', type: 'address' },
          { name: 'complains', internalType: 'uint8', type: 'uint8' },
          { name: 'host', internalType: 'string', type: 'string' },
          { name: 'pubKeyX', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
      { name: 'isActive', internalType: 'bool', type: 'bool' },
      { name: 'isRegistered', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'offset', internalType: 'uint256', type: 'uint256' },
      { name: 'limit', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'getValidators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_token', internalType: 'contract IERC20', type: 'address' },
      { name: '_stakeMinimun', internalType: 'uint256', type: 'uint256' },
      { name: '_stakeRegister', internalType: 'uint256', type: 'uint256' },
      { name: '_punishAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_punishThreshold', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'punishAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'punishThreshold',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'val', internalType: 'uint256', type: 'uint256' }],
    name: 'setPunishAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'val', internalType: 'uint8', type: 'uint8' }],
    name: 'setPunishThreshold',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'val', internalType: 'uint256', type: 'uint256' }],
    name: 'setStakeMinimum',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'val', internalType: 'uint256', type: 'uint256' }],
    name: 'setStakeRegister',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakeMinimum',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakeRegister',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalStake',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'validatorComplain',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'validatorDeregister',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stake', internalType: 'uint256', type: 'uint256' },
      { name: 'pubKeyYparity', internalType: 'bool', type: 'bool' },
      { name: 'pubKeyX', internalType: 'bytes32', type: 'bytes32' },
      { name: 'host', internalType: 'string', type: 'string' },
    ],
    name: 'validatorRegister',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'validators',
    outputs: [
      { name: 'stake', internalType: 'uint256', type: 'uint256' },
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'pubKeyYparity', internalType: 'bool', type: 'bool' },
      { name: 'lastComplainer', internalType: 'address', type: 'address' },
      { name: 'complains', internalType: 'uint8', type: 'uint8' },
      { name: 'host', internalType: 'string', type: 'string' },
      { name: 'pubKeyX', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'validatorsLength',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Versionable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const versionableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
] as const
