module github.com/aws/aws-sdk-go-v2/service/sso

go 1.15

require (
	github.com/aws/aws-sdk-go-v2 v1.17.4
	github.com/aws/aws-sdk-go-v2/internal/configsources v1.1.28
	github.com/aws/aws-sdk-go-v2/internal/endpoints/v2 v2.4.22
	github.com/aws/smithy-go v1.13.5
)

replace github.com/aws/aws-sdk-go-v2 => ../../

replace github.com/aws/aws-sdk-go-v2/internal/configsources => ../../internal/configsources/

replace github.com/aws/aws-sdk-go-v2/internal/endpoints/v2 => ../../internal/endpoints/v2/
