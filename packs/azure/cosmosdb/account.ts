// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Account extends lumi.NamedResource implements AccountArgs {
    public readonly consistencyPolicy: { consistencyLevel: string, maxIntervalInSeconds?: number, maxStalenessPrefix?: number }[];
    public readonly failoverPolicy: { _id?: string, location: string, priority: number }[];
    public readonly ipRangeFilter?: string;
    public readonly location: string;
    public readonly _name: string;
    public readonly offerType: string;
    public readonly primaryMasterKey?: string;
    public readonly primaryReadonlyMasterKey?: string;
    public readonly resourceGroupName: string;
    public readonly secondaryMasterKey?: string;
    public readonly secondaryReadonlyMasterKey?: string;
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: AccountArgs) {
        super(name);
        this.consistencyPolicy = args.consistencyPolicy;
        this.failoverPolicy = args.failoverPolicy;
        this.ipRangeFilter = args.ipRangeFilter;
        this.location = args.location;
        this._name = args._name;
        this.offerType = args.offerType;
        this.primaryMasterKey = args.primaryMasterKey;
        this.primaryReadonlyMasterKey = args.primaryReadonlyMasterKey;
        this.resourceGroupName = args.resourceGroupName;
        this.secondaryMasterKey = args.secondaryMasterKey;
        this.secondaryReadonlyMasterKey = args.secondaryReadonlyMasterKey;
        this.tags = args.tags;
    }
}

export interface AccountArgs {
    readonly consistencyPolicy: { consistencyLevel: string, maxIntervalInSeconds?: number, maxStalenessPrefix?: number }[];
    readonly failoverPolicy: { _id?: string, location: string, priority: number }[];
    readonly ipRangeFilter?: string;
    readonly location: string;
    readonly _name: string;
    readonly offerType: string;
    readonly primaryMasterKey?: string;
    readonly primaryReadonlyMasterKey?: string;
    readonly resourceGroupName: string;
    readonly secondaryMasterKey?: string;
    readonly secondaryReadonlyMasterKey?: string;
    readonly tags?: {[key: string]: any};
}
