// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(pipeline) {
  // [START lifesciences_v2beta_generated_WorkflowsServiceV2Beta_RunPipeline_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The project and location that this request should be executed against.
   */
  // const parent = 'abc123'
  /**
   *  Required. The description of the pipeline to run.
   */
  // const pipeline = {}
  /**
   *  User-defined labels to associate with the returned operation. These
   *  labels are not propagated to any Google Cloud Platform resources used by
   *  the operation, and can be modified at any time.
   *  To associate labels with resources created while executing the operation,
   *  see the appropriate resource message (for example, `VirtualMachine`).
   */
  // const labels = 1234
  /**
   *  The name of an existing Pub/Sub topic.  The server will publish
   *  messages to this topic whenever the status of the operation changes.
   *  The Life Sciences Service Agent account must have publisher permissions to
   *  the specified topic or notifications will not be sent.
   */
  // const pubSubTopic = 'abc123'

  // Imports the Lifesciences library
  const {WorkflowsServiceV2BetaClient} =
    require('@google-cloud/life-sciences').v2beta;

  // Instantiates a client
  const lifesciencesClient = new WorkflowsServiceV2BetaClient();

  async function callRunPipeline() {
    // Construct request
    const request = {
      pipeline,
    };

    // Run request
    const [operation] = await lifesciencesClient.runPipeline(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callRunPipeline();
  // [END lifesciences_v2beta_generated_WorkflowsServiceV2Beta_RunPipeline_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));