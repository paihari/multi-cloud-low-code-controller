// Copyright (c) 2016, 2018, 2020, Oracle and/or its affiliates.  All rights reserved.
// This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
// Code generated. DO NOT EDIT.

// LogAnalytics API
//
// The LogAnalytics API for the LogAnalytics service.
//

package loganalytics

import (
	"github.com/oracle/oci-go-sdk/common"
)

// ChangeLogAnalyticsObjectCollectionRuleCompartmentDetails Log Analytics Object Storage based collection rule compartment to be updated to.
type ChangeLogAnalyticsObjectCollectionRuleCompartmentDetails struct {

	// The OCID (https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment into which the rule should be moved.
	CompartmentId *string `mandatory:"true" json:"compartmentId"`
}

func (m ChangeLogAnalyticsObjectCollectionRuleCompartmentDetails) String() string {
	return common.PointerString(m)
}
