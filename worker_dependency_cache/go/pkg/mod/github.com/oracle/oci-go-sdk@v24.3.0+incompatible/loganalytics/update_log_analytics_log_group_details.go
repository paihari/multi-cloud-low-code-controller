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

// UpdateLogAnalyticsLogGroupDetails Information needed to update an existing log group.
type UpdateLogAnalyticsLogGroupDetails struct {

	// A user-friendly name that is changeable and that does not have to be unique.
	// Format: a leading alphanumeric, followed by zero or more
	// alphanumerics, underscores, spaces, backslashes, or hyphens in any order).
	// No trailing spaces allowed.
	DisplayName *string `mandatory:"false" json:"displayName"`

	// Description for this resource.
	Description *string `mandatory:"false" json:"description"`

	// Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
	// Example: `{"bar-key": "value"}`
	FreeformTags map[string]string `mandatory:"false" json:"freeformTags"`

	// Defined tags for this resource. Each key is predefined and scoped to a namespace.
	// Example: `{"foo-namespace": {"bar-key": "value"}}`
	DefinedTags map[string]map[string]interface{} `mandatory:"false" json:"definedTags"`
}

func (m UpdateLogAnalyticsLogGroupDetails) String() string {
	return common.PointerString(m)
}
