package inner

import (
	"fmt"

	"context"

	"github.com/oracle/oci-go-sdk/common"
	"github.com/oracle/oci-go-sdk/core"
	"github.com/oracle/oci-go-sdk/example/helpers"
	
)

// the main must return (interface{}, error)

func main(name string, compartmentId string, cidrBlock string) (interface{}, error) {
	// initialize VirtualNetworkClient
	client, err := core.NewVirtualNetworkClientWithConfigurationProvider(common.DefaultConfigProvider())
	helpers.FatalIfError(err)

  ctx := context.Background()

	// create VCN
	createVcnRequest := core.CreateVcnRequest{
		RequestMetadata: helpers.GetRequestMetadataWithDefaultRetryPolicy(),
	}
	createVcnRequest.CompartmentId = common.String(compartmentId)
	createVcnRequest.DisplayName = common.String(name)
	createVcnRequest.CidrBlock = common.String(cidrBlock)

  resp, err := client.CreateVcn(ctx, createVcnRequest)
  helpers.FatalIfError(err)
	
	fmt.Println("VCN created")
	fmt.Println("Error")
	fmt.Println(err)
	fmt.Println("Response")
	fmt.Println(resp)
	return *resp.Id, err

}