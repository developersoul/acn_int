
			<div class="spot-content <?php echo $cont['city'] ?>">
			  <div class="spot-content__container">
					<?php if(!empty($cont['header_img'])): ?>
						<img style="width: 100%;" src="<?php echo wp_get_attachment_url($cont['header_img']) ?>" alt="06525792_xl" width="944" height="auto" />
					<?php endif; ?>
					<div style="padding: 40px 80px;">
					  <div style="margin-bottom: 40px">
					    <h2><?php echo $cont['city'] ?></h2>
					    <h4><?php echo $cont['city_subtitle'] ?></h4>
					  </div>

					  <div class="col-4-l" style="padding-bottom: 40px">
					    <div style="margin-bottom: 40px">
					      <h3 style="color: red;font-weight: 500;">
									<?php echo isset($cont['families_already_returned_num']) ? $cont['families_already_returned_num'] : '' ?>
									<svg width="38px" height="27px" viewBox="0 0 38 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									    <!-- Generator: Sketch 45.2 (43514) - http://www.bohemiancoding.com/sketch -->
									    <desc>Created with Sketch.</desc>
									    <defs></defs>
									    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									        <g id="ME-Copy-2" transform="translate(-276.000000, -526.000000)" fill-rule="nonzero" fill="#F1364E">
									            <g id="Group-4" transform="translate(196.000000, 380.000000)">
									                <path d="M91.3429248,148.674299 C91.3429248,147.197307 92.539825,146 94.0168163,146 C95.4938075,146 96.6911149,147.1969 96.6911149,148.674299 C96.6911149,150.15129 95.4938075,151.348597 94.0168163,151.348597 C92.539825,151.348597 91.3429248,150.15129 91.3429248,148.674299 L91.3429248,148.674299 Z M89.5658943,162.018922 C89.6868056,162.0348 89.8105667,162.024622 89.9282212,161.989204 L89.1229597,165.342153 C89.056601,165.665804 89.2662621,165.981721 89.5895066,166.04808 C89.6269606,166.055408 89.6656359,166.059479 89.7034971,166.059886 L92.0785706,166.059886 L92.5447103,171.274137 C92.5951919,171.717886 92.9717676,172.052936 93.4183661,172.051715 L94.6152664,172.051715 C95.062272,172.052936 95.4384407,171.718293 95.4889222,171.274137 L95.9432558,166.063143 L98.3366492,166.063143 C98.6664074,166.059886 98.9322496,165.789158 98.9285856,165.458993 C98.9277714,165.420725 98.9241074,165.382864 98.9163723,165.34541 L98.1058184,161.994903 C98.2234729,162.030729 98.3468269,162.040906 98.4681454,162.025029 C98.9762173,161.95867 99.333659,161.493345 99.2677073,160.985273 C99.2656718,160.970617 99.262822,160.956368 99.2607865,160.942119 L97.5794266,153.739141 C97.3779077,152.87037 96.6666883,152.212482 95.7848904,152.078951 C95.6236752,152.054931 92.4176924,152.056153 92.2585128,152.078951 C91.3763077,152.212482 90.6650884,152.87037 90.4631624,153.739141 L88.7642968,160.942119 C88.6779897,161.446934 89.0167043,161.926102 89.5215194,162.012409 C89.5361753,162.014851 89.5508312,162.016887 89.5658943,162.018922 Z M81.9847116,154.151542 C81.9847116,153.020594 82.9015209,152.103784 84.0324696,152.103784 C85.1630111,152.103784 86.0802275,153.020594 86.0802275,154.151542 C86.0802275,155.282491 85.1630111,156.1993 84.0324696,156.1993 C82.9011138,156.199707 81.9847116,155.282491 81.9847116,154.151542 L81.9847116,154.151542 Z M80.6245607,164.369569 C80.7169744,164.381376 80.8114237,164.374048 80.9013947,164.346364 L80.2850318,166.914 C80.2341432,167.161523 80.3945441,167.403752 80.6424735,167.454641 C80.670564,167.460341 80.70069,167.463597 80.7300019,167.464005 L82.5489646,167.464005 L82.9051849,171.456522 C82.9446745,171.796051 83.2325005,172.052936 83.574472,172.051715 L84.4908742,172.051715 C84.8332529,172.052936 85.1210789,171.796458 85.1601613,171.456522 L85.5078324,167.466447 L87.3402297,167.466447 C87.5930443,167.464005 87.7957846,167.256786 87.793749,167.003971 C87.793749,166.97466 87.7904922,166.945348 87.7843855,166.91685 L87.1643586,164.351657 C87.2535155,164.378933 87.3483719,164.386668 87.4415998,164.374455 C87.8303889,164.323566 88.1039661,163.967346 88.0534846,163.578557 C88.0522632,163.567565 88.0502277,163.556573 88.0485992,163.545174 L86.7600995,158.029255 C86.6058052,157.364039 86.0615005,156.860038 85.3861068,156.758261 C85.2627528,156.739941 82.8078859,156.741162 82.6853461,156.758261 C82.0103595,156.860038 81.4656477,157.364039 81.3105392,158.029255 L80.0102333,163.544767 C79.9442816,163.93152 80.2040171,164.298733 80.5903635,164.364684 C80.6021697,164.366313 80.6127545,164.368348 80.6245607,164.369569 Z M104.86057,151.360403 C106.335933,151.360403 107.532019,150.164724 107.532019,148.688955 C107.532019,147.213592 106.335933,146.017506 104.86057,146.017506 C103.386836,146.017506 102.191157,147.211556 102.189121,148.685698 C102.189121,150.161875 103.3848,151.358775 104.86057,151.360403 Z M100.729636,159.520902 C100.806986,160.250034 101.293889,160.870875 101.982717,161.121247 L103.090053,171.291643 C103.13972,171.734577 103.514261,172.069221 103.960452,172.069628 L105.713463,172.069628 C106.159247,172.069628 106.533788,171.734984 106.583862,171.291643 L107.693641,161.121247 C108.397532,160.883903 108.900719,160.26184 108.986212,159.523752 L109.644507,154.579007 C109.784553,153.337731 108.892577,152.217775 107.651302,152.077322 C107.56703,152.067959 107.482351,152.063073 107.397673,152.063073 L102.323874,152.063073 C101.076492,152.061445 100.064012,153.071482 100.062384,154.319271 C100.061977,154.405578 100.067676,154.4927 100.077854,154.579414 L100.729636,159.520902 Z M114.152017,156.421989 C115.266681,156.421989 116.170463,155.518614 116.170463,154.403543 C116.170463,153.288878 115.266681,152.385097 114.152017,152.385097 C113.038574,152.385097 112.1352,153.28725 112.133571,154.401507 C112.133571,155.516171 113.037353,156.421175 114.152017,156.421989 Z M111.030713,162.588061 C111.089744,163.139286 111.457363,163.608276 111.978055,163.797581 L112.814664,171.48217 C112.852525,171.816813 113.135059,172.069628 113.471738,172.069628 L114.796878,172.069628 C115.13315,172.069628 115.41609,171.816406 115.453952,171.48217 L116.292596,163.797581 C116.82428,163.618046 117.204927,163.148243 117.268843,162.590503 L117.76633,158.854465 C117.872586,157.916486 117.198006,157.070106 116.260841,156.963851 C116.197333,156.956523 116.133416,156.953266 116.068686,156.953266 L112.235348,156.953266 C111.293298,156.952452 110.528341,157.715374 110.527526,158.657831 C110.527119,158.723376 110.53119,158.78892 110.538518,158.854465 L111.030713,162.588061 Z" id="Icono_Familia-Copy-3"></path>
									            </g>
									        </g>
									    </g>
									</svg>
								</h3>
					      <p><?php echo $cont['families_already_returned_text'] ?></p>
					    </div>

							<div>
								<h3 style="color: red;font-weight: 500;">
									<?php echo isset($cont['christians_already_returned_num']) ? $cont['christians_already_returned_num'] : ''?>
									<svg width="38px" height="27px" viewBox="0 0 38 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									    <!-- Generator: Sketch 45.2 (43514) - http://www.bohemiancoding.com/sketch -->
									    <desc>Created with Sketch.</desc>
									    <defs></defs>
									    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									        <g id="ME-Copy-2" transform="translate(-276.000000, -526.000000)" fill-rule="nonzero" fill="#F1364E">
									            <g id="Group-4" transform="translate(196.000000, 380.000000)">
									                <path d="M91.3429248,148.674299 C91.3429248,147.197307 92.539825,146 94.0168163,146 C95.4938075,146 96.6911149,147.1969 96.6911149,148.674299 C96.6911149,150.15129 95.4938075,151.348597 94.0168163,151.348597 C92.539825,151.348597 91.3429248,150.15129 91.3429248,148.674299 L91.3429248,148.674299 Z M89.5658943,162.018922 C89.6868056,162.0348 89.8105667,162.024622 89.9282212,161.989204 L89.1229597,165.342153 C89.056601,165.665804 89.2662621,165.981721 89.5895066,166.04808 C89.6269606,166.055408 89.6656359,166.059479 89.7034971,166.059886 L92.0785706,166.059886 L92.5447103,171.274137 C92.5951919,171.717886 92.9717676,172.052936 93.4183661,172.051715 L94.6152664,172.051715 C95.062272,172.052936 95.4384407,171.718293 95.4889222,171.274137 L95.9432558,166.063143 L98.3366492,166.063143 C98.6664074,166.059886 98.9322496,165.789158 98.9285856,165.458993 C98.9277714,165.420725 98.9241074,165.382864 98.9163723,165.34541 L98.1058184,161.994903 C98.2234729,162.030729 98.3468269,162.040906 98.4681454,162.025029 C98.9762173,161.95867 99.333659,161.493345 99.2677073,160.985273 C99.2656718,160.970617 99.262822,160.956368 99.2607865,160.942119 L97.5794266,153.739141 C97.3779077,152.87037 96.6666883,152.212482 95.7848904,152.078951 C95.6236752,152.054931 92.4176924,152.056153 92.2585128,152.078951 C91.3763077,152.212482 90.6650884,152.87037 90.4631624,153.739141 L88.7642968,160.942119 C88.6779897,161.446934 89.0167043,161.926102 89.5215194,162.012409 C89.5361753,162.014851 89.5508312,162.016887 89.5658943,162.018922 Z M81.9847116,154.151542 C81.9847116,153.020594 82.9015209,152.103784 84.0324696,152.103784 C85.1630111,152.103784 86.0802275,153.020594 86.0802275,154.151542 C86.0802275,155.282491 85.1630111,156.1993 84.0324696,156.1993 C82.9011138,156.199707 81.9847116,155.282491 81.9847116,154.151542 L81.9847116,154.151542 Z M80.6245607,164.369569 C80.7169744,164.381376 80.8114237,164.374048 80.9013947,164.346364 L80.2850318,166.914 C80.2341432,167.161523 80.3945441,167.403752 80.6424735,167.454641 C80.670564,167.460341 80.70069,167.463597 80.7300019,167.464005 L82.5489646,167.464005 L82.9051849,171.456522 C82.9446745,171.796051 83.2325005,172.052936 83.574472,172.051715 L84.4908742,172.051715 C84.8332529,172.052936 85.1210789,171.796458 85.1601613,171.456522 L85.5078324,167.466447 L87.3402297,167.466447 C87.5930443,167.464005 87.7957846,167.256786 87.793749,167.003971 C87.793749,166.97466 87.7904922,166.945348 87.7843855,166.91685 L87.1643586,164.351657 C87.2535155,164.378933 87.3483719,164.386668 87.4415998,164.374455 C87.8303889,164.323566 88.1039661,163.967346 88.0534846,163.578557 C88.0522632,163.567565 88.0502277,163.556573 88.0485992,163.545174 L86.7600995,158.029255 C86.6058052,157.364039 86.0615005,156.860038 85.3861068,156.758261 C85.2627528,156.739941 82.8078859,156.741162 82.6853461,156.758261 C82.0103595,156.860038 81.4656477,157.364039 81.3105392,158.029255 L80.0102333,163.544767 C79.9442816,163.93152 80.2040171,164.298733 80.5903635,164.364684 C80.6021697,164.366313 80.6127545,164.368348 80.6245607,164.369569 Z M104.86057,151.360403 C106.335933,151.360403 107.532019,150.164724 107.532019,148.688955 C107.532019,147.213592 106.335933,146.017506 104.86057,146.017506 C103.386836,146.017506 102.191157,147.211556 102.189121,148.685698 C102.189121,150.161875 103.3848,151.358775 104.86057,151.360403 Z M100.729636,159.520902 C100.806986,160.250034 101.293889,160.870875 101.982717,161.121247 L103.090053,171.291643 C103.13972,171.734577 103.514261,172.069221 103.960452,172.069628 L105.713463,172.069628 C106.159247,172.069628 106.533788,171.734984 106.583862,171.291643 L107.693641,161.121247 C108.397532,160.883903 108.900719,160.26184 108.986212,159.523752 L109.644507,154.579007 C109.784553,153.337731 108.892577,152.217775 107.651302,152.077322 C107.56703,152.067959 107.482351,152.063073 107.397673,152.063073 L102.323874,152.063073 C101.076492,152.061445 100.064012,153.071482 100.062384,154.319271 C100.061977,154.405578 100.067676,154.4927 100.077854,154.579414 L100.729636,159.520902 Z M114.152017,156.421989 C115.266681,156.421989 116.170463,155.518614 116.170463,154.403543 C116.170463,153.288878 115.266681,152.385097 114.152017,152.385097 C113.038574,152.385097 112.1352,153.28725 112.133571,154.401507 C112.133571,155.516171 113.037353,156.421175 114.152017,156.421989 Z M111.030713,162.588061 C111.089744,163.139286 111.457363,163.608276 111.978055,163.797581 L112.814664,171.48217 C112.852525,171.816813 113.135059,172.069628 113.471738,172.069628 L114.796878,172.069628 C115.13315,172.069628 115.41609,171.816406 115.453952,171.48217 L116.292596,163.797581 C116.82428,163.618046 117.204927,163.148243 117.268843,162.590503 L117.76633,158.854465 C117.872586,157.916486 117.198006,157.070106 116.260841,156.963851 C116.197333,156.956523 116.133416,156.953266 116.068686,156.953266 L112.235348,156.953266 C111.293298,156.952452 110.528341,157.715374 110.527526,158.657831 C110.527119,158.723376 110.53119,158.78892 110.538518,158.854465 L111.030713,162.588061 Z" id="Icono_Familia-Copy-3"></path>
									            </g>
									        </g>
									    </g>
									</svg>
																	</h3>
								<p><?php echo $cont['christians_already_returned_text'] ?></p>
							</div>

					  </div>

					  <div class="col-4-l" style="padding-bottom: 40px">
					    <div style="margin-bottom: 40px">
								<div style="margin-bottom: 40px">
									<h3 style="color: red;font-weight: 500;">
										<?php echo isset($cont['damaged_houses_num']) ?  $cont['damaged_houses_num'] : ''?>

											<svg width="30px" height="28px" viewBox="0 0 30 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

											    <defs></defs>
											    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											        <g id="ME-Copy-2" transform="translate(-559.000000, -524.000000)" fill-rule="nonzero" fill="#F1364E">
											            <g id="Group-4" transform="translate(196.000000, 380.000000)">
											                <path d="M378.145597,144.160029 L392.179702,156.189265 C392.362258,156.345491 392.447166,156.587513 392.402224,156.823542 C392.357282,157.059572 392.189373,157.253461 391.962177,157.331676 C391.734982,157.409891 391.483295,157.360454 391.30257,157.202113 L377.707031,145.54882 L364.111492,157.202113 C363.930767,157.360454 363.679081,157.409891 363.451885,157.331676 C363.224689,157.253461 363.056781,157.059572 363.011839,156.823542 C362.966897,156.587513 363.051804,156.345491 363.234361,156.189265 L377.268465,144.160029 C377.407167,144.041622 377.588237,143.985038 377.769684,144.003398 C377.908232,144.015232 378.03964,144.069985 378.145597,144.160029 Z M371.35827,144.024282 L371.35827,148.336846 L368.685107,150.634095 L368.685107,144.024282 L371.35827,144.024282 Z M388.399682,155.698472 L388.399682,171.40329 L367.01438,171.40329 L367.01438,155.698472 L377.707031,146.676561 L388.399682,155.698472 Z M382.385066,158.037476 L378.375322,158.037476 L378.375322,162.04722 L382.385066,162.04722 L382.385066,158.037476 Z M377.038741,158.037476 L373.028996,158.037476 L373.028996,162.04722 L377.038741,162.04722 L377.038741,158.037476 Z M378.375322,163.383802 L378.375322,167.393546 L382.385066,167.393546 L382.385066,163.383802 L378.375322,163.383802 Z M373.028996,163.383802 L373.028996,167.393546 L377.038741,167.393546 L377.038741,163.383802 L373.028996,163.383802 Z" id="Icono_Casa-Copy-3"></path>
											            </g>
											        </g>
											    </g>
											</svg>
									</h3>
									<h3 style="color: red;font-weight: 500;"><?php echo $cont['damaged_houses_title_1'] ?></h3>
								</div>
	<!--
								<div style="margin-bottom: 40px">
									<h1 style="font-weight: 700;"><?php echo isset($cont['percentage']) ? $cont['percentage'] : '' ?></h1>
								</div> -->

								<h4 style="color: red;"><?php echo isset($cont['number_of_houses_registered_to_be_renovated_num']) ? $cont['number_of_houses_registered_to_be_renovated_num'] : ''  ?></h4>
								<p><?php echo $cont['number_of_houses_registered_to_be_renovated_text'] ?></p>
					    </div>

					    <ul style="margin-bottom: 40px">
					      <li style="margin-bottom: 20px">
					        <h4><?php echo isset($cont['houses_totally_destroyed_num']) ?  $cont['houses_totally_destroyed_num'] : '' ?></h4>
					        <p><?php echo $cont['houses_totally_destroyed_text'] ?></p>
					      </li>
					      <li style="margin-bottom: 20px">
					        <h4><?php echo isset($cont['houses_burnt_num']) ? $cont['houses_burnt_num'] : '' ?></h4>
					        <p><?php echo $cont['houses_burnt_text'] ?></p>
					      </li>
					      <li style="margin-bottom: 20px">
					        <h4><?php echo isset($cont['houses_partially_damaged_num']) ? $cont['houses_partially_damaged_num'] : '' ?></h4>
					        <p><?php echo $cont['houses_partially_damaged_text'] ?></p>
					      </li>
					    </ul>

					    <h4 style="color: red;">27</h4>
					    <p>Number of houses actually being renovated</p>
					  </div>

					</div>
			  </div>
			</div>
