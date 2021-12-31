const url = new URL();
const img = new Image();
const pipeLine = {
	connect: url.connect()
}
const voices = {
	vendor: {
		site: url.host,
		image: img,
	},
	type: url.hostname
}
voices.type()
voices.vendor.site()