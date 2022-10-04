

const function_to_upload_files_to_s3 = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello function_to_upload_files_to_s3`}))
  res.end()
  
}

export default function_to_upload_files_to_s3
