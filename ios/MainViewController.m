//
//  MainViewController.m
//  WikalendaNativeBase
//
//  Created by ekachai limpisoot on 10/20/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "MainViewController.h"
#import "AppDelegate.h"
#import "ReactViewController.h"
@interface MainViewController ()

@end

@implementation MainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

- (IBAction)ClickGoReact:(id)sender {
  ReactViewController* reactViewController = [[ReactViewController alloc] initWithNibName:@"ReactViewController" bundle:nil];
  
  [self.navigationController pushViewController:reactViewController animated:YES];
}
@end
