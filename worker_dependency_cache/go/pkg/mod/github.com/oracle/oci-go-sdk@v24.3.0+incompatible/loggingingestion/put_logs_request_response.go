// Copyright (c) 2016, 2018, 2020, Oracle and/or its affiliates.  All rights reserved.
// This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
// Code generated. DO NOT EDIT.

package loggingingestion

import (
	"github.com/oracle/oci-go-sdk/common"
	"net/http"
)

// PutLogsRequest wrapper for the PutLogs operation
type PutLogsRequest struct {

	// OCID of a log to work with.
	LogId *string `mandatory:"true" contributesTo:"path" name:"logId"`

	// The logs to emit.
	PutLogsDetails `contributesTo:"body"`

	// Effective timestamp, for when the agent started processing the log
	// segment being sent. An RFC3339 formatted datetime string.
	TimestampOpcAgentProcessing *common.SDKTime `mandatory:"false" contributesTo:"header" name:"timestamp-opc-agent-processing"`

	// Version of the agent sending the request.
	OpcAgentVersion *string `mandatory:"false" contributesTo:"header" name:"opc-agent-version"`

	// Unique Oracle-assigned identifier for the request. If you need to contact Oracle about
	// a particular request, please provide the request ID.
	OpcRequestId *string `mandatory:"false" contributesTo:"header" name:"opc-request-id"`

	// Metadata about the request. This information will not be transmitted to the service, but
	// represents information that the SDK will consume to drive retry behavior.
	RequestMetadata common.RequestMetadata
}

func (request PutLogsRequest) String() string {
	return common.PointerString(request)
}

// HTTPRequest implements the OCIRequest interface
func (request PutLogsRequest) HTTPRequest(method, path string) (http.Request, error) {
	return common.MakeDefaultHTTPRequestWithTaggedStruct(method, path, request)
}

// RetryPolicy implements the OCIRetryableRequest interface. This retrieves the specified retry policy.
func (request PutLogsRequest) RetryPolicy() *common.RetryPolicy {
	return request.RequestMetadata.RetryPolicy
}

// PutLogsResponse wrapper for the PutLogs operation
type PutLogsResponse struct {

	// The underlying http response
	RawResponse *http.Response

	// Unique Oracle-assigned identifier for the request. If you need to contact
	// Oracle about a particular request, please provide the request ID.
	OpcRequestId *string `presentIn:"header" name:"opc-request-id"`
}

func (response PutLogsResponse) String() string {
	return common.PointerString(response)
}

// HTTPResponse implements the OCIResponse interface
func (response PutLogsResponse) HTTPResponse() *http.Response {
	return response.RawResponse
}
