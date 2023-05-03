window.SIDEBAR_ITEMS = {"constant":[["AVERAGE_ON_INITIALIZE_RATIO","We assume that an on-initialize consumes 1% of the weight on average, hence a single extrinsic will not be allowed to consume more than `AvailableBlockRatio - 1%`."],["BABE_GENESIS_EPOCH_CONFIG","The BABE epoch configuration at genesis."],["MAXIMUM_BLOCK_WEIGHT","We allow for 2 seconds of compute with a 6 second average block time. The storage proof size is not limited so far."],["NORMAL_DISPATCH_RATIO","We allow `Normal` extrinsics to fill up the block up to 75%, the rest can be used by  Operational  extrinsics."],["VERSION","Runtime version (Rococo)."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""]],"enum":[["BalancesCall","Contains one variant per dispatchable that can be called by an extrinsic."],["OriginCaller",""],["ProxyType","The type used to represent the kinds of proxying allowed."],["RuntimeCall",""],["RuntimeEvent",""],["RuntimeFreezeReason","A reason for placing a freeze on funds."],["RuntimeHoldReason","A reason for placing a hold on funds."],["RuntimeLockId","An identifier for each lock placed on funds."],["RuntimeSlashReason","A reason for slashing funds."],["SystemCall","Contains one variant per dispatchable that can be called by an extrinsic."]],"fn":[["native_version","Native version."]],"macro":[["impl_elections_weights","Implements the weight types for the elections module and a specific runtime. This macro should not be called directly; use [`impl_runtime_weights`] instead."]],"mod":[["api",""],["migrations","The runtime migrations per release."],["xcm_config","XCM configuration for Rococo."]],"struct":[["AnnouncementDepositBase",""],["AnnouncementDepositFactor",""],["BaseFilter","We currently allow all calls."],["BasicDeposit",""],["BeefySetIdSessionEntries",""],["BlockExecutionWeight","Time to execute an empty block. Calculated by multiplying the Average with `1.0` and adding `0`."],["BlockWeights","Block weights base values and limits."],["BondingDuration",""],["BountyDepositBase",""],["BountyDepositPayoutDelay",""],["BountyUpdatePeriod",""],["BountyValueMinimum",""],["Burn",""],["CandidacyBond",""],["CandidateDeposit",""],["ChallengePeriod",""],["ChildBountyValueMinimum",""],["ConfigDepositBase",""],["CooloffPeriod",""],["CouncilMaxMembers",""],["CouncilMaxProposals",""],["CouncilMotionDuration",""],["CrowdloanId",""],["CuratorDepositMax",""],["CuratorDepositMin",""],["CuratorDepositMultiplier",""],["DataDepositPerByte",""],["DepositBase",""],["DepositFactor",""],["DesiredMembers",""],["DesiredRunnersUp",""],["EnactmentPeriod",""],["EndingPeriod",""],["ExistentialDeposit",""],["ExpectedBlockTime",""],["ExtrinsicBaseWeight","Time to execute a NO-OP extrinsic, for example `System::remark`. Calculated by multiplying the Average with `1.0` and adding `0`."],["FastTrackVotingPeriod",""],["FieldDeposit",""],["FirstMessageFactorPercent",""],["FriendDepositFactor",""],["FullIdentificationOf",""],["GenesisConfig",""],["ImOnlineUnsignedPriority",""],["IndexDeposit",""],["InstantAllowed",""],["IntakePeriod",""],["LaunchPeriod",""],["LeafVersion","Version of the produced MMR leaf."],["LeasePeriod",""],["MaxActiveChildBountyCount",""],["MaxAdditionalFields",""],["MaxApprovals",""],["MaxAuthorities",""],["MaxCandidateIntake",""],["MaxCandidates",""],["MaxFriends",""],["MaxIntakeWeight",""],["MaxKeys",""],["MaxLockDuration",""],["MaxLocks",""],["MaxMemoLength",""],["MaxPeerDataEncodingSize",""],["MaxPeerInHeartbeats",""],["MaxPending",""],["MaxPermanentSlots",""],["MaxProposalWeight",""],["MaxProposals",""],["MaxProxies",""],["MaxRegistrars",""],["MaxReserves",""],["MaxScheduledPerBlock",""],["MaxSetIdSessionEntries",""],["MaxSignatories",""],["MaxStrikes",""],["MaxSubAccounts",""],["MaxTemporarySlotPerLeasePeriod",""],["MaxTemporarySlots",""],["MaxVoters",""],["MaxVotes",""],["MaxVotesPerVoter",""],["MaximumReasonLength",""],["MaximumSchedulerWeight",""],["MigController",""],["MigrationMaxKeyLen",""],["MigrationSignedDepositBase",""],["MigrationSignedDepositPerItem",""],["MinBid",""],["MinContribution",""],["MinReceipt",""],["MinVestedTransfer",""],["MinimumDeposit",""],["MinimumPeriod",""],["NisBasePeriod",""],["NisHoldReason",""],["NisPalletId",""],["NisTarget",""],["NoPreimagePostponement",""],["OffchainSolutionLengthLimit","A limit for off-chain phragmen unsigned solution length."],["OffchainSolutionWeightLimit","A limit for off-chain phragmen unsigned solution submission."],["OperationalFeeMultiplier","This value increases the priority of `Operational` transactions by adding a “virtual tip” that’s equal to the `OperationalFeeMultiplier * final_fee`."],["OriginPrivilegeCmp","Used the compare the privilege of an origin inside the scheduler."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["ParaDeposit",""],["ParasProvider",""],["ParasUnsignedPriority",""],["ParityDbWeight","`ParityDB` can be enabled with a feature flag, but is still experimental. These weights are available for brave runtime engineers who may want to try this out as default."],["PeriodSpend",""],["PermanentSlotLeasePeriodLength",""],["PhragmenElectionPalletId",""],["Prefix",""],["PreimageBaseDeposit",""],["PreimageByteDeposit",""],["ProposalBond",""],["ProposalBondMaximum",""],["ProposalBondMinimum",""],["ProxyDepositBase",""],["ProxyDepositFactor",""],["RecoveryDeposit",""],["RemoveKeysLimit",""],["ReportLongevity",""],["RewardValidators","Special `RewardValidators` that does nothing ;)"],["RocksDbWeight","By default, Substrate uses `RocksDB`, so this will be the weight used throughout the runtime."],["RotationPeriod",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["RuntimeOrigin","The runtime origin type representing the origin of a call."],["SS58Prefix",""],["SampleLength",""],["SessionKeys",""],["SessionsPerEra",""],["SocietyPalletId",""],["SpendPeriod",""],["SubAccountDeposit",""],["SubmissionDeposit",""],["TechnicalMaxMembers",""],["TechnicalMaxProposals",""],["TechnicalMotionDuration",""],["TemporarySlotLeasePeriodLength",""],["TermDuration","Daily council elections"],["ThawThrottle",""],["TipCountdown",""],["TipFindersFee",""],["TipReportDepositBase",""],["TransactionByteFee",""],["TreasuryPalletId",""],["UnvestedFundsAllowedWithdrawReasons",""],["ValidatorIdOf","Special `ValidatorIdOf` implementation that is just returning the input as result."],["Version",""],["VotingBondBase",""],["VotingBondFactor",""],["VotingPeriod",""],["WrongSideDeduction",""]],"type":[["Address","The address format for describing accounts."],["AllPallets","All pallets included in the runtime as a nested tuple of types."],["AllPalletsReversedWithSystemFirst","All pallets included in the runtime as a nested tuple of types in reversed order. With the system pallet first."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["AllPalletsWithSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order."],["AllPalletsWithoutSystem","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithoutSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order. Excludes the System pallet."],["AssignedSlots",""],["Auctions",""],["AuthorityDiscovery",""],["AuthorityDiscoveryConfig",""],["Authorship",""],["Babe",""],["BabeConfig",""],["Balances",""],["BalancesConfig",""],["Beefy",""],["BeefyConfig",""],["Block","Block type as expected by this runtime."],["BlockId","`BlockId` type as expected by this runtime."],["Bounties",""],["ChildBounties",""],["Claims",""],["ClaimsConfig",""],["Configuration",""],["ConfigurationConfig",""],["Council",""],["CouncilConfig",""],["Crowdloan",""],["Democracy",""],["DemocracyConfig",""],["Dmp",""],["Executive","Executive: handles dispatch to the various modules."],["Grandpa",""],["GrandpaConfig",""],["Header","Block header type as expected by this runtime."],["Historical",""],["Hrmp",""],["HrmpConfig",""],["Identity",""],["ImOnline",""],["ImOnlineConfig",""],["Indices",""],["IndicesConfig",""],["Initializer",""],["Migrations","All migrations that will run on the next runtime upgrade."],["Mmr",""],["MmrHashing",""],["MmrLeaf",""],["Multisig",""],["Nis",""],["NisCounterpartBalances",""],["NisCounterpartBalancesConfig",""],["Offences",""],["ParaInclusion",""],["ParaInherent",""],["ParaScheduler",""],["ParaSessionInfo",""],["ParachainsOrigin",""],["Paras",""],["ParasConfig",""],["ParasDisputes",""],["ParasShared",""],["ParasSlashing",""],["ParasSudoWrapper",""],["PhragmenElection",""],["PhragmenElectionConfig",""],["Preimage",""],["Proxy",""],["Recovery",""],["Registrar",""],["RegistrarConfig",""],["Scheduler",""],["Session",""],["SessionConfig",""],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The `SignedExtension` to the basic transaction logic."],["SignedPayload","The payload being signed in transactions."],["Slots",""],["Society",""],["StateTrieMigration",""],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["TechnicalCommittee",""],["TechnicalCommitteeConfig",""],["TechnicalMembership",""],["TechnicalMembershipConfig",""],["Timestamp",""],["Tips",""],["TransactionPayment",""],["Treasury",""],["TreasuryConfig",""],["Ump",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Utility",""],["ValidatorManager",""],["Vesting",""],["VestingConfig",""],["XcmPallet",""],["XcmPalletConfig",""]]};