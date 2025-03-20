const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

const run = () => {
  // 1) Get some input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true }); 

  // 2) Upload files
  const S3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${S3Uri} --region ${bucketRegion}`)

  const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
}

run();