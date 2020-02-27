import { AppBarProps } from "../AppBar";
import { AvatarProps } from "../Avatar";
import { BackdropProps } from "../Backdrop";
import { BadgeProps } from "../Badge";
import { BottomNavigationActionProps } from "../BottomNavigationAction";
import { BottomNavigationProps } from "../BottomNavigation";
import { BreadcrumbsProps } from "../Breadcrumbs";
import { ButtonBaseProps } from "../ButtonBase";
import { ButtonGroupProps } from "../ButtonGroup";
import { ButtonProps } from "../Button";
import { CardActionAreaProps } from "../CardActionArea";
import { CardActionsProps } from "../CardActions";
import { CardContentProps } from "../CardContent";
import { CardHeaderProps } from "../CardHeader";
import { CardMediaProps } from "../CardMedia";
import { CardProps } from "../Card";
import { CheckboxProps } from "../Checkbox";
import { ChipProps } from "../Chip";
import { CircularProgressProps } from "../CircularProgress";
import { CollapseProps } from "../Collapse";
import { ContainerProps } from "../Container";
import { CssBaselineProps } from "../CssBaseline";
import { DialogActionsProps } from "../DialogActions";
import { DialogContentProps } from "../DialogContent";
import { DialogContentTextProps } from "../DialogContentText";
import { DialogProps } from "../Dialog";
import { DialogTitleProps } from "../DialogTitle";
import { DividerProps } from "../Divider";
import { DrawerProps } from "../Drawer";
import { ExpansionPanelActionsProps } from "../ExpansionPanelActions";
import { ExpansionPanelDetailsProps } from "../ExpansionPanelDetails";
import { ExpansionPanelProps } from "../ExpansionPanel";
import { ExpansionPanelSummaryProps } from "../ExpansionPanelSummary";
import { FabProps } from "../Fab";
import { FilledInputProps } from "../FilledInput";
import { FormControlLabelProps } from "../FormControlLabel";
import { FormControlProps } from "../FormControl";
import { FormGroupProps } from "../FormGroup";
import { FormHelperTextProps } from "../FormHelperText";
import { FormLabelProps } from "../FormLabel";
import { GridListProps } from "../GridList";
import { GridListTileBarProps } from "../GridListTileBar";
import { GridListTileProps } from "../GridListTile";
import { GridProps } from "../Grid";
import { IconButtonProps } from "../IconButton";
import { IconProps } from "../Icon";
import { InputAdornmentProps } from "../InputAdornment";
import { InputBaseProps } from "../InputBase";
import { InputLabelProps } from "../InputLabel";
import { InputProps } from "../Input";
import { LinearProgressProps } from "../LinearProgress";
import { LinkProps } from "../Link";
import { ListItemAvatarProps } from "../ListItemAvatar";
import { ListItemIconProps } from "../ListItemIcon";
import { ListItemProps } from "../ListItem";
import { ListItemSecondaryActionProps } from "../ListItemSecondaryAction";
import { ListItemTextProps } from "../ListItemText";
import { ListProps } from "../List";
import { ListSubheaderProps } from "../ListSubheader";
import { MenuItemProps } from "../MenuItem";
import { MenuListProps } from "../MenuList";
import { MenuProps } from "../Menu";
import { MobileStepperProps } from "../MobileStepper";
import { ModalProps } from "../Modal";
import { NativeSelectProps } from "../NativeSelect";
// import { Options as useMediaQueryOptions } from "../useMediaQuery";
import { OutlinedInputProps } from "../OutlinedInput";
import { PaperProps } from "../Paper";
import { PopoverProps } from "../Popover";
import { RadioGroupProps } from "../RadioGroup";
import { RadioProps } from "../Radio";
import { SelectProps } from "../Select";
import { SliderProps } from "../Slider";
import { SnackbarContentProps } from "../SnackbarContent";
import { SnackbarProps } from "../Snackbar";
import { StepButtonProps } from "../StepButton";
import { StepConnectorProps } from "../StepConnector";
import { StepContentProps } from "../StepContent";
import { StepIconProps } from "../StepIcon";
import { StepLabelProps } from "../StepLabel";
import { StepperProps } from "../Stepper";
import { StepProps } from "../Step";
import { SvgIconProps } from "../SvgIcon";
import { SwipeableDrawerProps } from "../SwipeableDrawer";
import { SwitchProps } from "../Switch";
import { TableBodyProps } from "../TableBody";
import { TableCellProps } from "../TableCell";
import { TableContainerProps } from "../TableContainer";
import { TableHeadProps } from "../TableHead";
import { TablePaginationProps } from "../TablePagination";
import { TableProps } from "../Table";
import { TableRowProps } from "../TableRow";
import { TableSortLabelProps } from "../TableSortLabel";
import { TabProps } from "../Tab";
import { TabsProps } from "../Tabs";
import { TextFieldProps } from "../TextField";
import { ToolbarProps } from "../Toolbar";
import { TooltipProps } from "../Tooltip";
import { TouchRippleProps } from "../ButtonBase/TouchRipple";
import { TypographyProps } from "../Typography";
import { WithWidthOptions } from "../withWidth";

export type ComponentsProps = {
  [Name in keyof ComponentsPropsList]?: Partial<ComponentsPropsList[Name]>;
};

export interface ComponentsPropsList {
  PlutoTVAppBar: AppBarProps;
  PlutoTVAvatar: AvatarProps;
  PlutoTVBackdrop: BackdropProps;
  PlutoTVBadge: BadgeProps;
  PlutoTVBottomNavigation: BottomNavigationProps;
  PlutoTVBottomNavigationAction: BottomNavigationActionProps;
  PlutoTVBreadcrumbs: BreadcrumbsProps;
  PlutoTVButton: ButtonProps;
  PlutoTVButtonBase: ButtonBaseProps;
  PlutoTVButtonGroup: ButtonGroupProps;
  PlutoTVCard: CardProps;
  PlutoTVCardActionArea: CardActionAreaProps;
  PlutoTVCardActions: CardActionsProps;
  PlutoTVCardContent: CardContentProps;
  PlutoTVCardHeader: CardHeaderProps;
  PlutoTVCardMedia: CardMediaProps;
  PlutoTVCheckbox: CheckboxProps;
  PlutoTVChip: ChipProps;
  PlutoTVCircularProgress: CircularProgressProps;
  PlutoTVCollapse: CollapseProps;
  PlutoTVContainer: ContainerProps;
  PlutoTVCssBaseline: CssBaselineProps;
  PlutoTVDialog: DialogProps;
  PlutoTVDialogActions: DialogActionsProps;
  PlutoTVDialogContent: DialogContentProps;
  PlutoTVDialogContentText: DialogContentTextProps;
  PlutoTVDialogTitle: DialogTitleProps;
  PlutoTVDivider: DividerProps;
  PlutoTVDrawer: DrawerProps;
  PlutoTVExpansionPanel: ExpansionPanelProps;
  PlutoTVExpansionPanelActions: ExpansionPanelActionsProps;
  PlutoTVExpansionPanelDetails: ExpansionPanelDetailsProps;
  PlutoTVExpansionPanelSummary: ExpansionPanelSummaryProps;
  PlutoTVFab: FabProps;
  PlutoTVFilledInput: FilledInputProps;
  PlutoTVFormControl: FormControlProps;
  PlutoTVFormControlLabel: FormControlLabelProps;
  PlutoTVFormGroup: FormGroupProps;
  PlutoTVFormHelperText: FormHelperTextProps;
  PlutoTVFormLabel: FormLabelProps;
  PlutoTVGrid: GridProps;
  PlutoTVGridList: GridListProps;
  PlutoTVGridListTile: GridListTileProps;
  PlutoTVGridListTileBar: GridListTileBarProps;
  PlutoTVIcon: IconProps;
  PlutoTVIconButton: IconButtonProps;
  PlutoTVInput: InputProps;
  PlutoTVInputAdornment: InputAdornmentProps;
  PlutoTVInputBase: InputBaseProps;
  PlutoTVInputLabel: InputLabelProps;
  PlutoTVLinearProgress: LinearProgressProps;
  PlutoTVLink: LinkProps;
  PlutoTVList: ListProps;
  PlutoTVListItem: ListItemProps;
  PlutoTVListItemAvatar: ListItemAvatarProps;
  PlutoTVListItemIcon: ListItemIconProps;
  PlutoTVListItemSecondaryAction: ListItemSecondaryActionProps;
  PlutoTVListItemText: ListItemTextProps;
  PlutoTVListSubheader: ListSubheaderProps;
  PlutoTVMenu: MenuProps;
  PlutoTVMenuItem: MenuItemProps;
  PlutoTVMenuList: MenuListProps;
  PlutoTVMobileStepper: MobileStepperProps;
  PlutoTVModal: ModalProps;
  PlutoTVNativeSelect: NativeSelectProps;
  PlutoTVOutlinedInput: OutlinedInputProps;
  PlutoTVPaper: PaperProps;
  PlutoTVPopover: PopoverProps;
  PlutoTVRadio: RadioProps;
  PlutoTVRadioGroup: RadioGroupProps;
  PlutoTVSelect: SelectProps;
  PlutoTVSlider: SliderProps;
  PlutoTVSnackbar: SnackbarProps;
  PlutoTVSnackbarContent: SnackbarContentProps;
  PlutoTVStep: StepProps;
  PlutoTVStepButton: StepButtonProps;
  PlutoTVStepConnector: StepConnectorProps;
  PlutoTVStepContent: StepContentProps;
  PlutoTVStepIcon: StepIconProps;
  PlutoTVStepLabel: StepLabelProps;
  PlutoTVStepper: StepperProps;
  PlutoTVSvgIcon: SvgIconProps;
  PlutoTVSwipeableDrawer: SwipeableDrawerProps;
  PlutoTVSwitch: SwitchProps;
  PlutoTVTab: TabProps;
  PlutoTVTable: TableProps;
  PlutoTVTableBody: TableBodyProps;
  PlutoTVTableCell: TableCellProps;
  PlutoTVTableContainer: TableContainerProps;
  PlutoTVTableHead: TableHeadProps;
  PlutoTVTablePagination: TablePaginationProps;
  PlutoTVTableRow: TableRowProps;
  PlutoTVTableSortLabel: TableSortLabelProps;
  PlutoTVTabs: TabsProps;
  PlutoTVTextField: TextFieldProps;
  PlutoTVToolbar: ToolbarProps;
  PlutoTVTooltip: TooltipProps;
  PlutoTVTouchRipple: TouchRippleProps;
  PlutoTVTypography: TypographyProps;
  // PlutoTVUseMediaQuery: useMediaQueryOptions;
  PlutoTVWithWidth: WithWidthOptions;
}
