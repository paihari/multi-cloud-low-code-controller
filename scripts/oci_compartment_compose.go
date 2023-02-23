package inner

import (
	"fmt"
	
  "github.com/oracle/oci-go-sdk/identity"
	"github.com/oracle/oci-go-sdk/common"
	"github.com/oracle/oci-go-sdk/example/helpers"
  "context"
	

)

// the main must return (interface{}, error)

func main(parentCompartmentId string, name string, description string) (interface{}, error) {
  c, _ := identity.NewIdentityClientWithConfigurationProvider(common.DefaultConfigProvider())
  ctx := context.Background()
  cpSource :=  createCompartment(ctx, c, parentCompartmentId, name, description)
  fmt.Println(cpSource)
  return cpSource, nil 
}


func createCompartment(ctx context.Context, client identity.IdentityClient, parentCompartmentId string, compartmentName string, description string) *string {
	
	detail := identity.CreateCompartmentDetails{
		CompartmentId: &parentCompartmentId,
		Name:          &compartmentName,
		Description:   &description,

	}
	request := identity.CreateCompartmentRequest{
		CreateCompartmentDetails: detail,
		RequestMetadata:          helpers.GetRequestMetadataWithDefaultRetryPolicy(),
	}
	
	resp, _ := client.CreateCompartment(ctx, request)
	fmt.Println(resp)
	return resp.Id
}

